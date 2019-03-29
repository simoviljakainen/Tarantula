var MainContentAdmin = function() {
  var tab_id; //Currently active tab.

  var currentTabFunc = function() {
  // Helper function to determine function providing currently active tab.
    switch(tab_id) {
      case 'admin-userstab':
        return Users;
        break;
      case 'admin-projectstab':
        return Projects;
        break;
    }
  };

  return {

    init: function() {
      tab_id = 'admin-userstab';
      setTimeout("Users.init()",500);
    },

    tab_changed: function(tab) {
          // FIXME: Probably dead code?
      tab_id = tab;
      switch(tab) {
        case 'admin-userstab':
          // TODO: Purkka pois
          setTimeout("Users.init()",500);
          break;
        case 'admin-projectstab':
          Projects.init();
          break;
      }
    },

    case_changed: function(n) {
    },

    set_changed: function(n) {
    },

    exec2_changed: function(n){
    },

    project_changed: function(n) {
      if (tab_id == 'admin-projectstab') {
        Projects.load(n.attributes.dbid);
      }
    },

    user_changed: function(id) {
      if (tab_id == 'admin-userstab') {
        Users.load(id);
      }
    },

    clear: function(){
      // Called when user want's to change view to another.
      // Should return true and clear view, when it is ok to clear view.
      // false otherwise.
      if ( currentTabFunc().clear != undefined) {
        // View defines clear() method, return it's value...
        return currentTabFunc().clear();
      } else {
        // Otherwise just assume it's ok to clear.
        return true;
      }
    }
        ,
    htmlContent: function() {
      return('<div id="tabs1"><div id="admin-userstab" class="tab-content"><h2>Users</h2><div id="usertoolbar"></div><div id="userform"></div></div><div id="admin-projectstab" class="tab-content"><h2>Projects</h2><div id="projecttoolbar"></div><div id="projectform"></div><div id="users-grid"></div></div></div>')
    },
    htmlContentUsers: function() {
      return('<div id="userform"></div><div class="x-toolbar x-small-editor" style="max-height: 5px;"></div><h2 style="margin-left: 1em;">Import users from CSV</h2><p style="margin: 1em;">CSV file needs to have a header row and all the required columns.</p><div class="x-layout-panel-hd-text"><input type="button" onclick="GUI.importUsers()" value="Import users" style="background: url(&quot;/assets/tarantula/project_left.gif &quot;); border-radius: 5px; padding: 2px; color:white; font-weight: bold; border-color: #EA914F; background-size: cover; cursor: pointer;"></div>');

    },
    htmlContentProjects: function() {
     return('<div id="projectform"></div><div id="users-grid"></div></div>');
    }
  }
}();
