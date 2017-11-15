//
//  jbumappUITests.swift
//  jbumappUITests
//
//  Created by Connor Larkin on 10/29/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

import XCTest

class jbumappUITests: XCTestCase {
        
    override func setUp() {
        super.setUp()
        
        // Put setup code here. This method is called before the invocation of each test method in the class.
        
        // In UI tests it is usually best to stop immediately when a failure occurs.
        continueAfterFailure = false
        // UI tests must launch the application that they test. Doing this in setup will make sure it happens for each test method.
        let app = XCUIApplication()
        setupSnapshot(app)
        app.launch()
        // In UI tests it’s important to set the initial state - such as interface orientation - required for your tests before they run. The setUp method is a good place to do this.
    }
    
    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
        super.tearDown()
    }
    
    func testGoToAnswer() {
      doLogin()
      
      let app = XCUIApplication()
      
      sleep(2)
    
      app.otherElements["home-screen"].swipeUp()
      sleep(2)
      snapshot("AnswerScreen")
    }
  
  func testGoToAsk() {
    doLogin()
    
    let app = XCUIApplication()
    
    sleep(2)
    
    app.otherElements["home-screen"].swipeDown()
    sleep(2)
    snapshot("AskScreen")
  }
  func testGoToProfile() {
    doLogin()
    
    let app = XCUIApplication()
    
    sleep(2)
    
    app.otherElements["home-screen"].swipeLeft()
    sleep(2)
    snapshot("ProfileScreen")
  }
  func testGoToInbox() {
    doLogin()
    
    let app = XCUIApplication()
    
    sleep(3)
    
    app.otherElements["home-screen"].swipeRight()
    sleep(2)
    snapshot("InboxScreen")
  }
  func testGoToHome() {
    doLogin()
    
    let app = XCUIApplication()
    
    sleep(2)

    snapshot("HomeScreen")
  }
  func doLogin(){
    let app = XCUIApplication()
    sleep(3)
    if (app.otherElements["login"].exists){
      app.otherElements["login"].tap()
      
      self.tapElementAndWaitForKeyboardToAppear(element: app/*@START_MENU_TOKEN@*/.otherElements["username-textfield"]/*[[".otherElements",".otherElements[\"Just Between You and Me Username Password LOGIN     Don't have us at your school?  Contact us\"]",".images",".otherElements[\"Just Between You and Me Username Password LOGIN \"]",".otherElements.matching(identifier: \"Username Password\")",".otherElements.matching(identifier: \"Username\").otherElements[\"username-textfield\"]",".otherElements[\"username-textfield\"]"],[[[-1,6],[-1,5],[-1,4,5],[-1,3,4],[-1,2,3],[-1,1,2],[-1,0,1]],[[-1,6],[-1,5],[-1,4,5],[-1,3,4],[-1,2,3],[-1,1,2]],[[-1,6],[-1,5],[-1,4,5],[-1,3,4],[-1,2,3]],[[-1,6],[-1,5],[-1,4,5],[-1,3,4]],[[-1,6],[-1,5],[-1,4,5]],[[-1,6],[-1,5]]],[0]]@END_MENU_TOKEN@*/)
      app.otherElements["username-textfield"].exists ? app/*@START_MENU_TOKEN@*/.otherElements["username-textfield"]/*[[".otherElements",".otherElements[\"Just Between You and Me Username Password LOGIN     Don't have us at your school?  Contact us\"]",".images",".otherElements[\"Just Between You and Me Username Password LOGIN \"]",".otherElements.matching(identifier: \"Username Password\")",".otherElements.matching(identifier: \"Username\").otherElements[\"username-textfield\"]",".otherElements[\"username-textfield\"]"],[[[-1,6],[-1,5],[-1,4,5],[-1,3,4],[-1,2,3],[-1,1,2],[-1,0,1]],[[-1,6],[-1,5],[-1,4,5],[-1,3,4],[-1,2,3],[-1,1,2]],[[-1,6],[-1,5],[-1,4,5],[-1,3,4],[-1,2,3]],[[-1,6],[-1,5],[-1,4,5],[-1,3,4]],[[-1,6],[-1,5],[-1,4,5]],[[-1,6],[-1,5]]],[0]]@END_MENU_TOKEN@*/.doubleTap():nil
      UIPasteboard.general.string = "user"
      app.menuItems.element(boundBy: 0).tap()
      
      self.tapElementAndWaitForKeyboardToAppear(element: app.otherElements["password-textfield"])
      app.otherElements["password-textfield"].doubleTap()
      app.menuItems.element(boundBy: 0).tap()
      
      app.otherElements["login-button"].tap()
      sleep(3)
    }
  }
}
extension XCTestCase {
  
  func tapElementAndWaitForKeyboardToAppear(element: XCUIElement) {
    let keyboard = XCUIApplication().keyboards.element
    while (element.exists) {
      element.tap()
      if keyboard.exists {
        break;
      }
      RunLoop.current.run(until: Date(timeIntervalSinceNow: 0.5))
    }
  }
}


