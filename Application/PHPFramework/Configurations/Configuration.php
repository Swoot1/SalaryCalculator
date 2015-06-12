<?php

use Application\PHPFramework\AutoLoader;

// The errors should be logged and not shown to the user.
error_reporting(1);
ini_set('display_errors', 0);

// Paths to log files for exceptions.
const UNCONTROLLED_EXCEPTIONS_LOG_PATH = 'Application/Log/uncontrolled_exceptions.log';
const CONTROLLED_EXCEPTIONS_LOG_PATH   = 'Application/Log/controlled_exceptions.log';

// Set the folder where the saved session files should go.
session_save_path($GLOBALS['$ROOT_DIR'] . DIRECTORY_SEPARATOR . 'tmp');

// Set default character encoding.
mb_internal_encoding('UTF-8');

// Set up the auto loader.
require_once 'Application/PHPFramework/AutoLoader.php';
$autoLoader = new AutoLoader();
$autoLoader->setUpAutoLoader();

// Setup error handlers so that errors such as no such method exists or variable is used but never defined throws an exception.
require_once 'Application/PHPFramework/ErrorHandling/ErrorHandler.php';
require_once 'Application/PHPFramework/ErrorHandling/FatalErrorHandler.php';