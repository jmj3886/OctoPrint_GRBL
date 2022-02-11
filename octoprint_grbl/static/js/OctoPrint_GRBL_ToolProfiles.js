/*
 * View model for OctoPrint_GRBL_ToolProfiles
 *
 * Author: Joshua M. Jarvis
 */

$(function() {
    function OctoPrint_GRBL_ToolProfilesViewModel(parameters) {
        var self = this;

        self.settings = parameters[0];
        self.control  = parameters[1];

        self.toolProfiles = ko.observableArray();

        self.enabled_buttons = ko.observableArray();

        self.toolNames = ko.observableArray();

        //self.onBeforeBinding = function() {
        //    self.toolProfiles(self.settings.settings.plugins.grbl.OctoPrint_GRBL_settings()['toolProfiles']);
        //    self.toolProfiles.forEach((profile) => {
        //        self.toolNames.push(profile['name']);
        //    });
        //};

        //self.onSettingsBeforeSave = function() {
        //    self.settings.settings.plugins.OctoPrint_GRBL.OctoPrint_GRBL_settings({self.settings.settings.plugins.OctoPrint_GRBL.OctoPrint_GRBL_settings(), {'toolProfiles':self.toolProfiles.slice(0)}});
        //    self.onAfterTabChange();
        //};

        //self.onEventSettingsUpdated = function(payload) {
        //    self.toolProfiles(self.settings.settings.plugins.grbl.OctoPrint_GRBL_settings()['toolProfiles']);
        //};

        self.storeToolSettings  = function() {
        };

        self.onAfterBinding = function() {
            var toolProfilesLink = document.createElement('a');
            toolProfilesLink.href = "#settings_plugin_OctoPrint_GRBL_ToolProfiles";
            toolProfilesLink.text = "Tool Profiles";
            var toolProfilesListItem = document.createElement('li');
            toolProfilesListItem.id = "settings_plugin_grbl_toolprofiles_link";
            toolProfilesListItem.appendChild(toolProfilesLink);
            document.getElementById("settings_printerProfiles_link").after(toolProfilesListItem);
            document.getElementById("settings_printerProfiles").after(document.getElementById("settings_plugin_OctoPrint_GRBL_ToolProfiles"))
        };
    }

    OCTOPRINT_VIEWMODELS.push([
        OctoPrint_GRBL_ToolProfilesViewModel,
        ["settingsViewModel", "controlViewModel"],
        ["#settings_plugin_OctoPrint_GRBL_ToolProfiles"]
    ]);
});

