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
    },
    job: job
  };
});

app
.service('userProperties', function () {
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