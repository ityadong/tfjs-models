import * as handdetection from '@tensorflow-models/hand-pose-detection';

import * as params from './shared/params';


export async function setupDatGui(urlParams) {
  // const gui = new dat.GUI({ width: 300 });
  // gui.domElement.id = 'gui';

  // // The camera folder contains options for video settings.
  // const cameraFolder = gui.addFolder('Camera');
  // const fpsController = cameraFolder.add(params.STATE.camera, 'targetFPS');
  // fpsController.onFinishChange((_) => {
  //   params.STATE.isTargetFPSChanged = true;
  // });
  // const sizeController = cameraFolder.add(
  //   params.STATE.camera, 'sizeOption', Object.keys(params.VIDEO_SIZE));
  // sizeController.onChange(_ => {
  //   params.STATE.isSizeOptionChanged = true;
  // });
  // cameraFolder.open();

  let type = null; // full、lite
  let maxNumHands = 2 // 检测手的最大数量
  params.STATE.model = handdetection.SupportedModels.MediaPipeHands;

  params.STATE.modelConfig = { ...params.MEDIAPIPE_HANDS_CONFIG };
  params.STATE.modelConfig.type = type != null ? type : 'full';
  params.STATE.modelConfig.maxNumHands = maxNumHands != null ? maxNumHands : 2;

  const backends = params.MODEL_BACKEND_MAP[params.STATE.model];
  // 设置backend，默认值是数组的第一个元素
  params.STATE.backend = backends[0];

  // return gui;
}
