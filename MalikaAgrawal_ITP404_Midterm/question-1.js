var templateSource = $('#project-info').html();
var template = Handlebars.compile(templateSource);


var promise = $.ajax({
  url: 'http://itp-api.herokuapp.com/api/v1/me',
  type: 'get',
  dataType: 'json'
}).then(function(user) {  
  var html = template({
    data: user
  });

$('#user').html(html);
},function(){
console.log("An error occurred.");
  
});
