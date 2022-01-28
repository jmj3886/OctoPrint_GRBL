/*
 * View model for OctoPrint_GRBL
 *
 * Author: Joshua M. Jarvis
 * License: Apache 2.0
 */

// Update OctoPrint Base with GRBL Info
document.getElementById("connection_printers").previousElementSibling.innerHTML = "Machine Profile";
document.getElementById("state").querySelector('span[title="Estimated total print time based on analysis of the file or past prints"]').innerHTML = "Approx. Total Run Time";
document.getElementById("state").querySelector('span[title="Total print time so far"]').innerHTML = "Run Time";
document.getElementById("state").querySelector('span[title="Estimated time until the print job is done. This is only an estimate and accuracy depends heavily on various factors!"]').innerHTML = "Run Time Left";
document.getElementById("state").querySelector('span[title="Bytes printed vs total bytes of file"]').innerHTML = "Executed";
document.getElementById("job_print").querySelector('span').setAttribute("data-bind", "text: (isPaused() ? 'Restart' : 'Run')");
document.getElementById("sidebar_plugin_action_command_notification_wrapper").querySelector('a').innerHTML = document.getElementById("sidebar_plugin_action_command_notification_wrapper").querySelector('a').querySelector('i').outerHTML + " Machine Notifications ";

