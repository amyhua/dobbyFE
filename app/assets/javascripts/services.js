app
.service('jobProperties', function () {
  var jobString;

  return {
    getJobString: function () {
      return jobString;
    },
    setJobString: function(value) {
      jobString = value;
    }
  };
});