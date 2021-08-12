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

/////////////////////////////////////////////////////////////////////////////////
/*       Test case every 'it' block, use (tests:'it') param in wdio conf       */
/////////////////////////////////////////////////////////////////////////////////

describe('Verify broken images',()=>{

  it('C1 first test',()=>{
    expect(brokenImages.isTitleDistpayed(h3Title)).true;
    expect(brokenImages.getHeaderText(h3Title)).contain(h3TitleTex);
  });

  it('C2 second test',()=>{
    expect(brokenImages.isTitleDistpayed(h3Title)).true;
    expect(brokenImages.getHeaderText(h3Title)).contain(h3TitleTex);
  });

  xit('C3 third tes',()=>{
    expect(brokenImages.isTitleDistpayed(h3Title)).true;
    expect(brokenImages.getHeaderText(h3Title)).contain(h3TitleTex);
  });

  it('C4 fourth test',()=>{
    expect(1).to.eq(2);
    expect(brokenImages.isTitleDistpayed(h3Title)).true;
    expect(brokenImages.getHeaderText(h3Title)).contain(h3TitleTex);
  });
});

