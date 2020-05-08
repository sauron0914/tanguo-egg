import { Controller } from 'egg';
// const officegen = require('officegen');
const fs = require('fs');

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }
  public async userInfo() {
    const { ctx } = this;
    // // Create an empty Word object:
    // const docx = officegen('docx');

    // // Officegen calling this function after finishing to generate the docx document:
    // docx.on('finalize', function() {
    //   console.log(
    //     'Finish to create a Microsoft Word document.',
    //   );
    // });

    // // Officegen calling this function to report errors:
    // docx.on('error', function(err) {
    //   console.log(err);
    // });

    // // Create a new paragraph:
    // let pObj = docx.createP();

    // pObj.addText('Simple');
    // pObj.addText(' with color', { color: '000088' });
    // pObj.addText(' and back color.', { color: '00ffff', back: '000088' });

    // pObj = docx.createP();

    // pObj.addText('Since ');
    // pObj.addText('officegen 0.2.12', {
    //   back: '00ffff',
    //   shdType: 'pct12',
    //   shdColor: 'ff0000',
    // }); // Use pattern in the background.
    // pObj.addText(' you can do ');
    // pObj.addText('more cool ', { highlight: true }); // Highlight!
    // pObj.addText('stuff!', { highlight: 'darkGreen' }); // Different highlight color.

    // pObj = docx.createP();

    // pObj.addText('Even add ');
    // pObj.addText('external link', { link: 'https://github.com' });
    // pObj.addText('!');

    // pObj = docx.createP();

    // pObj.addText('Bold + underline', { bold: true, underline: true });

    // pObj = docx.createP({ align: 'center' });

    // pObj.addText('Center this text', {
    //   border: 'dotted',
    //   borderSize: 12,
    //   borderColor: '88CCFF',
    // });

    // pObj = docx.createP();
    // pObj.options.align = 'right';

    // pObj.addText('Align this text to the right.');

    // pObj = docx.createP();

    // pObj.addText('Those two lines are in the same paragraph,');
    // pObj.addLineBreak();
    // pObj.addText('but they are separated by a line break.');

    // docx.putPageBreak();

    // pObj = docx.createP();

    // pObj.addText('Fonts face only.', { font_face: 'Arial' });
    // pObj.addText(' Fonts face and size.', { font_face: 'Arial', font_size: 40 });

    // docx.putPageBreak();

    // pObj = docx.createP();

    // // We can even add images:
    // // pObj.addImage('some-image.png');
    // // console.log('pObj', pObj);
    // // Let's generate the Word document into a file:

    // const out = fs.createWriteStream('example.docx');
    // out.on('error', function(err) {
    //   console.log(err);
    // });

    // // Async call to generate the output file:
    // docx.generate(out);
    // console.log('put', out);
    // ctx.body = { name: '1131' };
    const filePath = 'example.docx';
    ctx.attachment(filePath);
    ctx.set('Content-type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    this.ctx.body = fs.createReadStream(filePath);
  }
}
