import React, { useState, useRef, useEffect, useCallback } from 'react';
import { X, ZoomIn, ZoomOut, RotateCw, RefreshCw, Check, Upload, Move } from 'lucide-react';

interface ImageCropModalProps {
  isOpen: boolean;
  imageSrc: string;
  onClose: () => void;
  onCropComplete: (croppedDataUrl: string) => void;
  title?: string;
}

export const ImageCropModal: React.FC<ImageCropModalProps> = ({
  isOpen,
  imageSrc,
  onClose,
  onCropComplete,
  title = 'Adjust & Crop Photo',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [currentSrc, setCurrentSrc] = useState<string>(imageSrc);
  const [imageObj, setImageObj] = useState<HTMLImageElement | null>(null);

  // Transform states
  const [zoom, setZoom] = useState<number>(1);
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [rotation, setRotation] = useState<number>(0);

  // Interaction dragging states
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const offsetStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Canvas display dimension
  const VIEWPORT_SIZE = 360;
  const CROP_RADIUS = 150; // 300px diameter circle

  // Sync currentSrc when imageSrc prop changes
  useEffect(() => {
    if (imageSrc) {
      setCurrentSrc(imageSrc);
    }
  }, [imageSrc]);

  // Load image object whenever currentSrc changes
  useEffect(() => {
    if (!currentSrc) return;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      setImageObj(img);
      // Reset transforms
      setZoom(1);
      setOffset({ x: 0, y: 0 });
      setRotation(0);
    };
    img.onerror = () => {
      console.error('Failed to load image for cropping:', currentSrc);
    };
    img.src = currentSrc;
  }, [currentSrc]);

  // Draw viewport canvas
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !imageObj) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, VIEWPORT_SIZE, VIEWPORT_SIZE);

    const cx = VIEWPORT_SIZE / 2;
    const cy = VIEWPORT_SIZE / 2;

    // Calculate base scale so image covers the circular aperture
    const isRotatedSideways = rotation === 90 || rotation === 270;
    const renderWidth = isRotatedSideways ? imageObj.naturalHeight : imageObj.naturalWidth;
    const renderHeight = isRotatedSideways ? imageObj.naturalWidth : imageObj.naturalHeight;

    const baseScale = Math.max((CROP_RADIUS * 2) / renderWidth, (CROP_RADIUS * 2) / renderHeight);
    const totalScale = baseScale * zoom;

    ctx.save();

    // 1. Draw transformed image
    ctx.save();
    ctx.translate(cx + offset.x, cy + offset.y);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.scale(totalScale, totalScale);
    ctx.drawImage(imageObj, -imageObj.naturalWidth / 2, -imageObj.naturalHeight / 2);
    ctx.restore();

    // 2. Draw darkened overlay outside circular aperture
    ctx.save();
    ctx.fillStyle = 'rgba(10, 10, 12, 0.72)';
    ctx.beginPath();
    ctx.rect(0, 0, VIEWPORT_SIZE, VIEWPORT_SIZE);
    ctx.arc(cx, cy, CROP_RADIUS, 0, Math.PI * 2, true);
    ctx.fill();

    // 3. Draw circular crop ring & crosshairs
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, CROP_RADIUS, 0, Math.PI * 2);
    ctx.stroke();

    // Subtle alignment crosshair
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    // vertical
    ctx.moveTo(cx, cy - CROP_RADIUS + 10);
    ctx.lineTo(cx, cy + CROP_RADIUS - 10);
    // horizontal
    ctx.moveTo(cx - CROP_RADIUS + 10, cy);
    ctx.lineTo(cx + CROP_RADIUS - 10, cy);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.restore();

    ctx.restore();
  }, [imageObj, zoom, offset, rotation, VIEWPORT_SIZE, CROP_RADIUS]);

  // Redraw when any transform changes
  useEffect(() => {
    draw();
  }, [draw]);

  // Mouse / Touch handlers for dragging
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    offsetStartRef.current = { ...offset };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setOffset({
      x: offsetStartRef.current.x + dx,
      y: offsetStartRef.current.y + dy,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      dragStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      offsetStartRef.current = { ...offset };
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDragging || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - dragStartRef.current.x;
    const dy = e.touches[0].clientY - dragStartRef.current.y;
    setOffset({
      x: offsetStartRef.current.x + dx,
      y: offsetStartRef.current.y + dy,
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Wheel to zoom
  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.08 : -0.08;
    setZoom((prev) => Math.min(Math.max(0.6, prev + delta), 4.0));
  };

  // Rotate clockwise 90 degrees
  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  // Reset transforms
  const handleReset = () => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
    setRotation(0);
  };

  // Handle uploading a different file within modal
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCurrentSrc(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Generate cropped output canvas
  const handleSave = () => {
    if (!imageObj) return;

    // Output a high-resolution 600x600 px cropped square image
    const OUTPUT_SIZE = 600;
    const outputCanvas = document.createElement('canvas');
    outputCanvas.width = OUTPUT_SIZE;
    outputCanvas.height = OUTPUT_SIZE;
    const ctx = outputCanvas.getContext('2d');
    if (!ctx) return;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    const cx = OUTPUT_SIZE / 2;
    const cy = OUTPUT_SIZE / 2;
    const scaleRatio = OUTPUT_SIZE / (CROP_RADIUS * 2);

    const isRotatedSideways = rotation === 90 || rotation === 270;
    const renderWidth = isRotatedSideways ? imageObj.naturalHeight : imageObj.naturalWidth;
    const renderHeight = isRotatedSideways ? imageObj.naturalWidth : imageObj.naturalHeight;

    const baseScale = Math.max(OUTPUT_SIZE / renderWidth, OUTPUT_SIZE / renderHeight);
    const totalScale = baseScale * zoom;

    ctx.save();
    ctx.translate(cx + offset.x * scaleRatio, cy + offset.y * scaleRatio);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.scale(totalScale, totalScale);
    ctx.drawImage(imageObj, -imageObj.naturalWidth / 2, -imageObj.naturalHeight / 2);
    ctx.restore();

    // Export as high-quality JPEG
    const croppedDataUrl = outputCanvas.toDataURL('image/jpeg', 0.94);
    onCropComplete(croppedDataUrl);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-[#FBF9F5] dark:bg-zinc-900 border border-[#1A1A1A]/20 dark:border-zinc-700 w-full max-w-lg shadow-2xl rounded-sm overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b border-[#1A1A1A]/10 dark:border-zinc-800 flex items-center justify-between bg-white dark:bg-zinc-900/50">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-black dark:bg-white" />
            <h3 className="font-mono text-sm font-semibold tracking-wide uppercase text-[#1A1A1A] dark:text-white">
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded-sm transition-colors text-zinc-500 hover:text-black dark:hover:text-white cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Viewport & Controls Body */}
        <div className="p-5 flex flex-col items-center gap-4 overflow-y-auto">
          <div className="text-center text-xs font-mono text-[#1A1A1A]/70 dark:text-zinc-400">
            <span className="font-semibold text-black dark:text-white flex items-center justify-center gap-1.5 mb-1">
              <Move className="w-3.5 h-3.5" />
              Click & Drag to position • Scroll or slider to zoom
            </span>
            <span>The circular ring indicates how your avatar will display.</span>
          </div>

          {/* Interactive Canvas Viewport */}
          <div className="relative border border-[#1A1A1A]/20 dark:border-zinc-700 bg-[#121214] rounded-sm shadow-inner overflow-hidden flex items-center justify-center">
            <canvas
              ref={canvasRef}
              width={VIEWPORT_SIZE}
              height={VIEWPORT_SIZE}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onWheel={handleWheel}
              className={`block select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
              style={{ width: `${VIEWPORT_SIZE}px`, height: `${VIEWPORT_SIZE}px` }}
            />
          </div>

          {/* Controls Bar */}
          <div className="w-full space-y-3 pt-2">
            {/* Zoom Slider */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setZoom((prev) => Math.max(0.6, +(prev - 0.1).toFixed(2)))}
                className="p-1.5 border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-sm hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer text-zinc-700 dark:text-zinc-300"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              <div className="flex-1 flex items-center gap-2">
                <input
                  type="range"
                  min="0.6"
                  max="3.5"
                  step="0.05"
                  value={zoom}
                  onChange={(e) => setZoom(parseFloat(e.target.value))}
                  className="w-full accent-[#1A1A1A] dark:accent-white cursor-pointer"
                />
                <span className="font-mono text-xs w-10 text-right text-[#1A1A1A]/70 dark:text-zinc-400">
                  {Math.round(zoom * 100)}%
                </span>
              </div>

              <button
                type="button"
                onClick={() => setZoom((prev) => Math.min(3.5, +(prev + 0.1).toFixed(2)))}
                className="p-1.5 border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-sm hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer text-zinc-700 dark:text-zinc-300"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Actions (Rotate, Reset, Choose File) */}
            <div className="flex items-center justify-between gap-2 pt-1 border-t border-[#1A1A1A]/10 dark:border-zinc-800">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleRotate}
                  className="px-2.5 py-1.5 text-xs font-mono border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-sm hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300"
                  title="Rotate 90 degrees clockwise"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>Rotate 90°</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-2.5 py-1.5 text-xs font-mono border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-sm hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300"
                  title="Reset Position & Zoom"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>

              <div>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-2.5 py-1.5 text-xs font-mono border border-[#1A1A1A]/20 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-sm hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300"
                  title="Select different image from computer"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Swap Image...</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Buttons */}
        <div className="p-4 border-t border-[#1A1A1A]/10 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono uppercase tracking-wider text-[#1A1A1A]/70 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-5 py-2 text-xs font-mono uppercase tracking-wider bg-[#1A1A1A] text-white dark:bg-white dark:text-black font-semibold rounded-sm hover:opacity-90 transition-opacity flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <Check className="w-4 h-4" />
            <span>Save & Apply Avatar</span>
          </button>
        </div>
      </div>
    </div>
  );
};
