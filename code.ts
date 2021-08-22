// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).

// This shows the HTML page in "ui.html".
figma.showUI(__html__);

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  if (msg.type === 'pop-image' && msg.data && msg.data.length) {
    addImageToCanvas(msg.data)
    // for (let i = 0; i < msg.count; i++) {
    //   const rect = figma.createRectangle();
    //   rect.x = i * 150;
    //   rect.fills = [{type: 'SOLID', color: {r: 1, g: 0.5, b: 0}}];
    //   figma.currentPage.appendChild(rect);
    //   nodes.push(rect);
    // }
    // console.log(value);
    // let newImageHash = figma.createImage(msg.imageArray).hash;
    // let selectNode = figma.currentPage.selection[0] as GeometryMixin;
    // selectNode.fills = [{type: 'IMAGE', scaleMode:'FIT',imageHash:newImageHash}];
    // figma.viewport.scrollAndZoomIntoView(selectNode);
  }
  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
};

// Function that creates a rectangle on canvas with an image fill from image data
function addImageToCanvas(data) {
  let imageHash = figma.createImage(data).hash
  let selectNode = figma.currentPage.selection[0] as GeometryMixin;
  if(!selectNode) return;
  selectNode.fills = [ { type: "IMAGE", scaleMode: "FILL", imageHash } ]
}