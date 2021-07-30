const helper = require('../../helper/helper');
const brokenImages = require('../pages/BrokenImages.page');
const {expect} = require('chai');

const envURLs = helper.parseJsonFile('./environments/env.json');
const h3TitleTex = "Broken Images";
const h3Title = "h3";

//#region //Preparation
before('land to main url', () => {
  browser.url(envURLs.LOG_IN+"broken_images");
});
//#endregion
describe('Verify broken images',()=>{
  it('Verify Title',()=>{
    expect(brokenImages.isTitleDistpayed(h3Title)).true;
    expect(brokenImages.getHeaderText(h3Title)).contain(h3TitleTex);
  });
});