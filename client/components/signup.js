angular.module('app').component('signup', {
  controller:function(){

    this.signup=function(input){
        var newInput ={
        firstName : input.firstName,
        lastName : input.lastName,
        username : input.username,
        username : input.phoneNumber,
        username : input.email,
        password : input.password,
        available : true
      }
      console.log("our new input" , newInput)

    }
  },
  // this.registeredSuccessfully = function () {
  //
  // },
  bindings: {},
  template : `

  <div>
    <form ng-submit = "$ctrl.signup(newMember)">
      <input type="text" placeholder="enter your First name" ng-model="newMember.firstName"/></br>
      <input type="text" placeholder="enter your Last name" ng-model="newMember.lastName"/></br>
      <input type="text" placeholder="enter your User name" ng-model="newMember.userName"/></br>
      <input type="number" placeholder="enter your Phone number" ng-model="newMember.phoneNumber"/></br>
      <input type="email" placeholder="enter your  Email" ng-model="newMember.email"/></br>
      <input type="password" placeholder="enter your Password" ng-model="newMember.password"/></br>
      <input ng-click="submit = true" type="submit" value="Register"/>
    </form>
    <p ng-show="submit">registered Successfully</p>

  </div>
  
`
})
