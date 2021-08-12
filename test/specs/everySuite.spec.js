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
/*                       Test case every suite (describe)                      */
/////////////////////////////////////////////////////////////////////////////////

describe('C1 some test case',()=>{
    xit('step 1',()=>{
       expect(brokenImages.isTitleDistpayed(h3Title)).true;
       expect(brokenImages.getHeaderText(h3Title)).contain(h3TitleTex);
     });
     it('step 2',()=>{
      expect(brokenImages.isTitleDistpayed(h3Title)).true;
      expect(brokenImages.getHeaderText(h3Title)).contain(h3TitleTex);
    });
  })
  
  describe('C2 some test case',()=>{
    it('step 1',()=>{
      // browser.pause(5000)
       expect(brokenImages.isTitleDistpayed(h3Title)).true;
       expect(brokenImages.getHeaderText(h3Title)).contain(h3TitleTex);
     });
  })
  
  describe('C3 some test case',()=>{
    it('step 1',()=>{
       expect(brokenImages.isTitleDistpayed(h3Title)).true;
       expect(brokenImages.getHeaderText(h3Title)).contain(h3TitleTex);
     });
  })
  
  describe('C4 asdasd',()=>{
    it('some step 1',()=>{
       expect(1).to.eq(2);
       expect(brokenImages.isTitleDistpayed(h3Title)).true;
       expect(brokenImages.getHeaderText(h3Title)).contain(h3TitleTex);
     });
  
     it('some step 2',()=>{
       expect(1).to.eq(2);
       expect(brokenImages.isTitleDistpayed(h3Title)).true;
       expect(brokenImages.getHeaderText(h3Title)).contain(h3TitleTex);
     });
  })