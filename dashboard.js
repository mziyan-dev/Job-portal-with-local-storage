console.log("js is running");






function profileDataLoad(){
  const loggedUser = JSON.parse(localStorage.getItem("logged in user"));
  if(!loggedUser){
   window.location = "login.html"
}

document.querySelector("#wellcomeNote").textContent = `Hi Wellcome Mr ${loggedUser.FirstName} ${loggedUser.LastName}`
document.querySelector(".card-title").textContent = `${loggedUser.FirstName} ${loggedUser.LastName}`
document.querySelector(".card-text").textContent = loggedUser.description || "No Description added"

document.querySelector("#one").textContent = loggedUser.email
document.querySelector("#two").textContent = loggedUser.userName

document.querySelector("img").src = loggedUser?.profilepic || `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAACUCAMAAAAeaLPCAAAAMFBMVEXk5ueutLersbTn6eqxt7rh4+TZ3N3W2dqorrK4vcDQ09XLz9HDx8nq7O3T1tje4OHEN6b4AAAE5klEQVR4nO2c7bKcIAyGlfApIPd/t0Vdz9mzXV2VJODMvn/aM+10HtMQAiTpuq++akwAtQmuCGKMXdLGaJ2mH+7zEQDaOymsFZPyL73z+h7/CWlw1tr+r/InOJ9U1/AXQKeHILKl30pkft0qPoAJTmyQL/hCBtOk/0AKco/8wS+Dbo4ewPef0Rf+0Bg9mF1/eaG3Y0P4oMJrePlk/NQMvnHHzf6gl40YH/yBhfoffR9ibfCs6E+TL/gN0EM4b/YHvavN3l1mn+nrOn4B++Q5NdGv+8xKX8/00Zex11y1kM5tTW/ph0r0qtTusyrtVg6DXbhUg73Y4R/0NUKOlijsmd7wO05hlHySZF+zpjzSrLLc0R7Q7J4leNcsIK3Wh3hNr7BW6yLJeSi/msNviTVcKpT96UmMOxUMyOy99WzwCi/GP8R3qgK0zfVXVnPRe7wNahXbsUSdvqY5Qs8FT8DO5Tcw4HsN24EwUnhN3mVZ/AY1J3sSzz5F4TXZb1gOsyMNPMvNaww07MIxWD5iJ2WrnKKHB/zc4AHPsWKJ2FlOJIkMniHcGCr43pPDw0jFLhjgB6IN9gv/EZ6I/Qv/Ef7ObjPeGf7Ocb7TZPDDNz3YFxk8w/3BrVNiqsMIy3Ul8qPIrziOgYD4lPZHPLeVRPCGgz0SrVgO9uIimw05nqdkEqdnyGxmKQL23jLc2szwJH7D9LgABLeVXF6TczP8TZax/AD/KZPvCRwMdqgXIxt8B8gvO6yFZtincL7lOgk5ReCt8ENOLVkNj/yeKVnRp+IJPHjLX5uIVj0hmPLJZ+GVTzClZM/CemXg3J+e6HGShFrdCxiOU6eIe1I5vGArz3pVeby0FVs0S++7qzVdLCp65OHNx/5XyUOJ4KsE3dLlFI2xinVTedVeMn4bHb1wJVEQfSPtvNCFo/3fK3rdrsC/guGU8YUcWpp/ACkc9nxhW5seAJ1xx8KOlUa1xT4JjPyML/qhyZET+WA7un5n6eY/cWO702IAdHBSvHN/IaRrdNDHjzKd8cH182ybFVvY3gU/qrbRZwGopMf8Bc5JKZ0LmVunO5D/ajpWK6WW390J/I6CyTWytVPSWpsf5R90StP/AkCLzjNRZU83g198fV6lq6aVu/j+MBqtuqa+ACKkvEBzkJxDy/s8QSx/Mn2EH7Rq4gMgRp2NLWdbH8kO5r+Wg1AYu7r7FUR1Lp182bVCvelmSod5wtp1TdPNBvbpZtClMcgi8FVWOK8ZdzBQ44eBZaeU/6XANB4PYsqpCx76wp+j0EiOD1HvZr1F/B5I78+m8wZVNe58PqR7Z0jDgaNSKT7JaEJInqah8QW/xz+xwHS5wcDeL6MJUX0/GkeySjfxEX2HpG96Fx+rohs6TxhhtmRx3qr0wcskZInel99NXZkqiITvyp71gaCa7AR9UTVIHBljzFv8gul+J+d/UtBf7DPNLlPX7Au9GK6w6xbY+/nN8KzxYawWZV4lzu63MFReqs8S7lTEp2sAvKRz9CSjSAok5GF6mjEqRTps+8Z8ZtFBeroO9SKJI+dbimlTKDrwaA6pmfj+qgNVIo3sq+/0qU4E6udiOxK7lSKxxUDzq93Gzezwtfn2tVuURtM4h6lNtyfrdMWT2Bw/1LrTTNpyHKJuS2RtdIPplqPkj963ClD16GLrqUnjHwbRR7vaCuxUAAAAAElFTkSuQmCC`



const userNameinput  = document.querySelector("#userNameInput");
const firstNameInput = document.querySelector("#firstNameInput");
const lastNameInput  = document.querySelector("#lastNameInput");
const emailInput     = document.querySelector("#emailInput");
const profilePicInput = document.querySelector("#profilePicInput");
const descriptionInput = document.querySelector("#descriptionInput");

 userNameinput.value = loggedUser.userName || "";
 firstNameInput.value = loggedUser.FirstName || "";
 lastNameInput.value = loggedUser.LastName || "";
 emailInput.value = loggedUser.email || "";
 profilePicInput.value = loggedUser?.profilepic || "";
 descriptionInput.value =loggedUser?.description || "";
}
profileDataLoad();


 function LogoutHandler(){
  localStorage.removeItem("logged in user");
  window.location = "login.html"
 }


 function updateprofileHandler(){
  const userDetails  = {
    userName : userNameInput.value,
    FirstName: firstNameInput.value,
    LastName : lastNameInput.value,
    email : emailInput.value,
    profilepic : profilePicInput.value,
    description : descriptionInput.value
  }
 console.log(userDetails, "....userdetails");
 localStorage.setItem("logged in user",JSON.stringify(userDetails))



 const allUsers = JSON.parse(localStorage.getItem("allUsers"));
 const isExist = allUsers.find(function(userData){
         return userData.email === userDetails.email
 })
  isExist.userName = userNameInput.value
  isExist.FirstName= firstNameInput.value
  isExist.LastName =lastNameInput.value
  isExist.email = emailInput.value
  isExist.profilepic = profilePicInput.value
  isExist.description = descriptionInput.value

  localStorage.setItem('allUsers',JSON.stringify(allUsers))


 window.location.reload()
 profileDataLoad();
 }