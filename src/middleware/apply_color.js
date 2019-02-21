import { fabric } from 'fabric';

export function applyColor(canvasId, imageUrl, filter) {
  const canvas = new fabric.StaticCanvas(canvasId);

  fabric.Image.fromURL(imageUrl, function(img) {
    img.filters.push(
      new fabric.Image.filters.HueRotation({
        rotation : filter.color
      })
    );
    img.applyFilters();
    canvas.add(img);
  });

  document.getElementById(canvasId).style.width = '35%';
  document.getElementById(canvasId).style.height = 'auto';
}
