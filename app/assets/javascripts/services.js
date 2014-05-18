app
.service('jobProperties', function () {
  var jobString;

  var job = {}

  return {
    getProperty: function(prop) {
      return job[prop];
    },
    setProperty: function(prop, value) {
      job[prop] = value;
    }
  };
});