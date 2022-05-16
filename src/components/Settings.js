var Settings = (function() {
    var sidebarOpen = false;
  
    var getSidebarOpen = function() {
      return sidebarOpen;   
    };
  
    var setSidebarOpen = function() { sidebarOpen = !sidebarOpen; };
  
    return {
        getSidebarOpen: getSidebarOpen,
        setSidebarOpen: setSidebarOpen
    }
  
  })();
  
  export default Settings;