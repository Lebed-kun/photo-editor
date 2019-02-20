import { fabric } from 'fabric';

export function applyFilter(canvasId, imageUrl, filter) {
  const canvas = new fabric.StaticCanvas(canvasId);

  fabric.Image.fromURL(imageUrl, function(img) {
    img.filters.push(
      new fabric.Image.filters.Brightness({ brightness : filter.brightness}),
      new fabric.Image.filters.Contrast({ contrast : filter.contrast}),
      new fabric.Image.filters.Saturation({ saturation : filter.saturation}),
    );
    img.applyFilters();
    canvas.add(img);
  });

  document.getElementById(canvasId).style.width = '35%';
  document.getElementById(canvasId).style.height = 'auto';
}
