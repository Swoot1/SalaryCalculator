<?php
$protocol = isset($_SERVER["SERVER_PROTOCOL"]) ? $_SERVER['SERVER_PROTOCOL'] : 'HTTP/1.0';
header(sprintf('%s 200 OK', $protocol), true, 200);
header('Charset:utf-8');
header('Content-Type: text/html');

echo '<!DOCTYPE html>
<html ng-app="salaryCalculator" class="background-image">
<head>
    <title>Räkna ut konsultarvode per timme</title>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width"/>
    <link href="http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Playfair+Display:400italic" rel="stylesheet" type="text/css" />
    <link href="Public/css/normalize.css" type="text/css" rel="stylesheet"/>
    <link href="Public/css/Foundation/css/foundation.css" type="text/css" rel="stylesheet"/>
    <link href="http://netdna.bootstrapcdn.com/font-awesome/3.0.2/css/font-awesome.css" rel="stylesheet">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.css">
    <link href="Public/css/main.css" type="text/css" rel="stylesheet"/>
    <link href="Public/css/custom.css" type="text/css" rel="stylesheet"/>
</head>
<body>
<div class="row">
   <div class="large-12 columns">
   <span alertbox></span>
   </div>
</div>
<div class="row page_wrap">
    <div class="large-12 columns">
         <div id="content">
             <div ng-class="{row:\'enabled\', container : content.setContainerClass}">
                 <div class="large-12 columns" ng-view>
                 </div>
             </div>
             <div class="row footer">
                <div class="large-6 columns right">
                  <p class="right">Rapportera eventuella fel till yoyoyowazzup[snabel-a]hotmail.com</p>
               </div>
               <div class="large-6 columns">
                 <p>Senast uppdaterad juni 2015.</p>
               </div>
            </div>
         </div>
      </div>
</div>
<script type="text/javascript" src="Public/Scripts/Vendor/Angular/angular.js"></script>
<script type="text/javascript" src="Public/Scripts/Vendor/Angular/angular-messages.js"></script>
<script type="text/javascript" src="Public/Scripts/Vendor/Angular/Plugins/angular-resource.js"></script>
<script type="text/javascript" src="Public/Scripts/Vendor/Angular/Plugins/angular-route.js"></script>
<script type="text/javascript" src="Public/css/Foundation/js/vendor/jquery.js"></script>
<script type="text/javascript" src="Public/Scripts/Vendor/notify.min.js"></script>
<script type="text/javascript" src="Public/Scripts/Vendor/fastclick.js"></script>
<script type="text/javascript" src="Public/Scripts/app.js"></script>
<script type="text/javascript" src="Public/Scripts/Services/AlertBoxService.js"></script>
<script type="text/javascript" src="Public/Scripts/Services/MunicipalityService.js"></script>
<script type="text/javascript" src="Public/Scripts/Factories/RequestErrorInterceptorFactory.js"></script>
<script type="text/javascript" src="Public/Scripts/Factories/RequestSuccessInterceptorFactory.js"></script>
<script type="text/javascript" src="Public/Scripts/Factories/SalaryCalculationFactory.js"></script>
<script type="text/javascript" src="Public/Scripts/Controllers/SalaryCalculatorController.js"></script>
<script type="text/javascript" src="Public/Scripts/Filters/MoneyFilter.js"></script>
<script type="text/javascript" src="Public/Scripts/Directories/AlertBox.js"></script>
</body>
</html>';
