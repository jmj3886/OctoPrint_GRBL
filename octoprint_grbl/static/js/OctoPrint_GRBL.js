/*
 * View model for OctoPrint_GRBL
 *
 * Author: Joshua M. Jarvis
 * License: Apache 2.0
 */

// Update OctoPrint Base HTML with GRBL
// Main Window
document.getElementById("connection_printers").previousElementSibling.innerHTML = "Machine Profile";
document.getElementById("state").querySelector('span[title="Estimated total print time based on analysis of the file or past prints"]').innerHTML = "Approx. Total Run Time";
document.getElementById("state").querySelector('span[title="Total print time so far"]').innerHTML = "Run Time";
document.getElementById("state").querySelector('span[title="Estimated time until the print job is done. This is only an estimate and accuracy depends heavily on various factors!"]').innerHTML = "Run Time Left";
document.getElementById("state").querySelector('span[title="Bytes printed vs total bytes of file"]').innerHTML = "Executed";
document.getElementById("job_print").querySelector('span').setAttribute("data-bind", "text: (isPaused() ? 'Restart' : 'Run')");
document.getElementById("sidebar_plugin_action_command_notification_wrapper").querySelector('a').innerHTML = document.getElementById("sidebar_plugin_action_command_notification_wrapper").querySelector('a').querySelector('i').outerHTML + " Machine Notifications ";
document.getElementById("temp_link").remove();
document.getElementById("control_link").remove();

// Settings Dialog
document.getElementById("settingsTabs").querySelector('li').innerHTML = "Machine";
document.getElementById("settings_printerProfiles_link").querySelector('a').innerHTML = "Machine Profiles";
document.getElementById("settings_temperature_link").remove();
document.getElementById("settings_plugin_action_command_prompt_link").querySelector('a').innerHTML = "Machine Dialogs";
document.getElementById("settings_plugin_action_command_notification_link").querySelector('a').innerHTML = "Machine Notifications";
document.getElementById("settings_plugin_virtual_printer_link").querySelector('a').innerHTML = "Virtual Machine";

// Settings - Printer Profiles
document.getElementById("settings_printerProfiles").querySelector('h3').innerHTML = "Machine Profiles";
document.getElementById("settings_printerProfiles_editDialog").querySelector('h3').innerHTML = "Edit Machine Profile \"" + document.getElementById("settings_printerProfiles_editDialog").querySelector('h3').innerHTML.split("\"")[1] + "\"";
document.getElementById("settings_printerProfiles_editDialog").querySelectorAll('li')[1].querySelector('a').innerHTML = "Work area & build volume";
document.getElementById("settings_printerProfiles_editDialog_buildvolume").querySelectorAll('div')[6].remove();
document.getElementById("settings_printerProfiles_editDialog_buildvolume").querySelectorAll('div')[6].remove();
document.getElementById("settings_printerProfiles_editDialog_buildvolume").querySelectorAll('div')[7].innerHTML = "Please define the build volume.";
document.getElementById("settings_printerProfiles_editDialog_buildvolume").querySelectorAll('div')[22].remove();
document.getElementById("settings_printerProfiles_editDialog_buildvolume").querySelectorAll('div')[22].remove();
document.getElementById("settings_printerProfiles_editDialog_buildvolume").querySelector('p').querySelector('small').innerHTML = "This information is used for the bounding box check, the GCODE Viewer and/or when slicing from OctoPrint.";
document.getElementById("settings_printerProfiles_editDialog_axes").querySelector('small').innerHTML = 'This information is used for manual control via the "GRBL" tab.';
document.getElementById("settings_printerProfiles_editDialog").querySelectorAll('li')[3].remove();

// Settings - GCODE Scripts
document.getElementById("settings_gcodeScripts").querySelectorAll('label')[0].innerHTML = "Before run starts"
document.getElementById("settings_gcodeScripts").querySelectorAll('label')[1].innerHTML = "After run completes"
document.getElementById("settings_gcodeScripts").querySelectorAll('label')[2].innerHTML = "After run is cancelled"
document.getElementById("settings_gcodeScripts").querySelectorAll('label')[3].innerHTML = "After run is paused"
document.getElementById("settings_gcodeScripts").querySelectorAll('label')[4].innerHTML = "Before run is resumed"
document.getElementById("settings_gcodeScripts").querySelectorAll('label')[7].innerHTML = "After serial connection to machine is established"
document.getElementById("settings_gcodeScripts").querySelectorAll('label')[8].innerHTML = "Before serial connection to machine is closed"

// Settings - Features
document.getElementById("settings-modelSizeDetection").text = " Enable model size detection and warn if model exceeds work area ";
document.getElementById("settings-printStartConfirmation").text = " Confirm before starting a run ";
document.getElementById("settings-printCancelConfirmation").text = " Confirm before cancelling a run ";
document.getElementById("settings-gcodeAnalysis_runAtIdle").text = " Only when idle (not running) ";

// Settings - Appearence
document.getElementById("settings-appearanceFuzzyTimes").innerHTML = " Show fuzzy run time estimates ";

// Settings - Serial Connection
document.getElementById("settings_serialConnection").querySelector('div').innerHTML = "<strong>Note: </strong>Changing most of these settings requires restarting the connection with your machine for your changes to become effective.";

// Settings - Virtual Printer
document.getElementById("settings_plugin_virtual_printer").querySelector('label').innerHTML = (
	document.getElementById("settings_plugin_virtual_printer").querySelector('label').querySelector('input').outerHTML + 
	" Enable the virtual machine " +
	'<span class="help-block">If enabled, an additional serial port <code>VIRTUAL</code> will be available for connecting, backed by a fake machine implementation. Useful for development.</span>');


