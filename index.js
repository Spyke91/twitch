// Events will be sent when someone followers
// Please use event listeners to run functions.

document.addEventListener('goalLoad', function(obj) {
  // obj.detail will contain information about the current goal
  // this will fire only once when the widget loads
  console.log(obj.detail);
  
  var current = obj.detail.amount.current;
  var target = obj.detail.amount.target;
  var percent = current/target*100;
  
  var barrita = document.createElement('style');
  barrita.innerHTML = ".bar {width: "+percent+"%;}";
  document.body.appendChild(barrita);
  
  $('#title').html(obj.detail.title);
  $('#currenttext').html(current + "/" + target);
  // $('#title').html(obj.detail.title);
  // $('#goal-current').text(obj.detail.amount.current);
  // $('#goal-total').text(obj.detail.amount.target);
  // $('#goal-end-date').text(obj.detail.to_go.ends_at);
});

document.addEventListener('goalEvent', function(obj) {
  // obj.detail will contain information about the goal
  console.log(obj.detail);
  
  var current = obj.detail.amount.current;
  var target = obj.detail.amount.target;
  var percent = current/target*100;
  
  var barrita = document.createElement('style');
  barrita.innerHTML = ".bar {width: "+percent+"%;}";
  document.body.appendChild(barrita);
  
  $('#currenttext').html(current + "/" + target);
});
