import initOpenCascade from "opencascade.js";

import {
  loadSTEPorIGES,
  setupThreeJSViewport,
  addShapeToScene,
} from './library';

const scene = setupThreeJSViewport();

initOpenCascade().then(openCascade => {
  document.getElementById("step-file").addEventListener('input', async (event) => { await loadSTEPorIGES(openCascade, event.srcElement.files[0], addShapeToScene, scene); });

  // let width = 50, height = 70, thickness = 30;
  addShapeToScene(openCascade, scene);

  window.changeSliderWidth = value => {
    // width = parseInt(value);
    scene.remove(scene.getObjectByName("shape"));
    const now = Date.now();
    addShapeToScene(openCascade, scene);
    console.log(Date.now() - now)
  }
  window.changeSliderHeight = value => {
    // height = parseInt(value);
    scene.remove(scene.getObjectByName("shape"));
    addShapeToScene(openCascade, scene);
  }
  window.changeSliderThickness = value => {
    // thickness = parseInt(value);
    scene.remove(scene.getObjectByName("shape"));
    addShapeToScene(openCascade, scene);
  }
});
