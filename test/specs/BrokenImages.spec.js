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
describe('C1 Verify broken images',()=>{
  it('C1 Verify Title',()=>{
    expect(brokenImages.isTitleDistpayed(h3Title)).true;
    expect(brokenImages.getHeaderText(h3Title)).contain(h3TitleTex);
  });
  it('C2 Verify Title',()=>{
    expect(brokenImages.isTitleDistpayed(h3Title)).true;
    expect(brokenImages.getHeaderText(h3Title)).contain(h3TitleTex);
  });
  it('C3 Verify Title',()=>{
    expect(brokenImages.isTitleDistpayed(h3Title)).true;
    expect(brokenImages.getHeaderText(h3Title)).contain(h3TitleTex);
  });
  it('C4 Verify Title',()=>{
    expect(brokenImages.isTitleDistpayed(h3Title)).true;
    expect(brokenImages.getHeaderText(h3Title)).contain(h3TitleTex);
  });
});