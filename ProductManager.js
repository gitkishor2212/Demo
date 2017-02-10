describe('Product Manager', function(){

it('should be able to edit the product', function(){
//browser.ignoreSynchronization = true;

browser.get('http://demos.angularcode.com/product-manager/#/');
element(by.model("filterProduct")).sendKeys("Baba Ramdev Patanjali Gulab Jal");
element(by.xpath("//th[text()='Name']//ancestor::tr//following::tr[1]/td[2]")).getText().then(function(res){
	expect(res).toEqual('Baba Ramdev Patanjali Gulab Jal');
	element(by.xpath("//td[text()='Baba Ramdev Patanjali Gulab Jal   ']/following::td[6]//button[1]")).click();
	element(by.xpath("//button[@class='close ng-scope']")).click();
	
});


//element(by.id("gobutton")).click();
browser.sleep(2000);
});
});