# coding=utf-8
from __future__ import absolute_import
import octoprint.plugin
import octoprint.settings

class OctoPrint_GRBL(octoprint.plugin.StartupPlugin,
                      octoprint.plugin.TemplatePlugin,
                      octoprint.plugin.SettingsPlugin,
                      octoprint.plugin.AssetPlugin):

    def get_assets(self):
        return dict(
            js=["js/OctoPrint_GRBL.js"],
        )

    def on_after_startup(self):
        self._logger.info("OctoPrint_GRBL Loaded! (more: %s)" % self._settings.get(["OctoPrint_GRBL_settings"]))

    def get_settings_version(self):
        return 1

    def on_settings_migrate(self, target, current=None):
        if current is None or current < self.get_settings_version():
            self._logger.debug("Settings Migration Needed! Resetting to defaults!")
            # Reset pluggin settings to defaults.
            self._settings.set(['OctoPrint_GRBL_settings'], self.get_settings_defaults()["OctoPrint_GRBL_settings"])

    def get_settings_defaults(self):
        return dict(OctoPrint_GRBL_settings={{}})

    def get_template_configs(self):
        return [
            #dict(type="settings", custom_bindings=True),
            #dict(type="generic", template="OctoPrint_GRBL.jinja2", custom_bindings=True)
        ]

    ##~~ Softwareupdate hook
    def get_version(self):
        return self._plugin_version

    def get_update_information(self):
        return dict(grbl=dict( 
            displayName='GRBL',
            displayVersion=self._plugin_version,
            type='github_release',
            user='jmj3886',
            repo='OctoPrint_GRBL',
            current=self._plugin_version,
            pip='https://github.com/jmj3886/OctoPrint_GRBL/archive/{target_version}.zip'))


# If you want your plugin to be registered within OctoPrint under a different name than what you defined in setup.py
# ("OctoPrint_PluginSkeleton"), you may define that here. Same goes for the other metadata derived from setup.py that
# can be overwritten via __plugin_xyz__ control properties. See the documentation for that.
__plugin_name__ = 'GRBL'
__plugin_pythoncompat__ = ">=2.7,<4"

def __plugin_load__():
    global __plugin_implementation__
    __plugin_implementation__ = OctoPrint_GRBL()

    global __plugin_hooks__
    __plugin_hooks__ = \
        {'octoprint.plugin.softwareupdate.check_config': __plugin_implementation__.get_update_information}
