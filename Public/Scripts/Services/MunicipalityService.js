(function(){
   angular.module('salaryCalculator').factory('MunicipalityService', [function(){

      var getMunicipalities = function(){
         return [
            {
               "municipality": "ALE",
               "townships": [
                  {
                     "townshipCode": "14 40  01",
                     "township": "NÖDINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 34.36,
                     "sumOfPercentagesExclChurchFeePercentage": 33.53,
                     "municipalityTaxPercentage": 21.87,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.18,
                     "churchFeePercentage": 0.83
                  },
                  {
                     "townshipCode": "14 40  03",
                     "township": "SKEPPLANDA-HÅLANDA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.72,
                     "sumOfPercentagesExclChurchFeePercentage": 33.62,
                     "municipalityTaxPercentage": 21.87,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.1
                  },
                  {
                     "townshipCode": "14 40  05",
                     "township": "STARRKÄRR-KILANDA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.68,
                     "sumOfPercentagesExclChurchFeePercentage": 33.56,
                     "municipalityTaxPercentage": 21.87,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.21,
                     "churchFeePercentage": 1.12
                  }
               ]
            },
            {
               "municipality": "ALINGSÅS",
               "townships": [
                  {
                     "townshipCode": "14 89  01",
                     "township": "ALINGSÅS",
                     "sumOfPercentagesInclChurchFeePercentage": 34.19,
                     "sumOfPercentagesExclChurchFeePercentage": 33.08,
                     "municipalityTaxPercentage": 21.36,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1.11
                  },
                  {
                     "townshipCode": "14 89  08",
                     "township": "BJÄRKE, DEL",
                     "sumOfPercentagesInclChurchFeePercentage": 34.75,
                     "sumOfPercentagesExclChurchFeePercentage": 33.25,
                     "municipalityTaxPercentage": 21.36,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.41,
                     "churchFeePercentage": 1.5
                  },
                  {
                     "townshipCode": "14 89  09",
                     "township": "HEMSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.19,
                     "sumOfPercentagesExclChurchFeePercentage": 33.08,
                     "municipalityTaxPercentage": 21.36,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1.11
                  },
                  {
                     "townshipCode": "14 89  10",
                     "township": "ÖDENÄS",
                     "sumOfPercentagesInclChurchFeePercentage": 34.19,
                     "sumOfPercentagesExclChurchFeePercentage": 33.08,
                     "municipalityTaxPercentage": 21.36,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1.11
                  }
               ]
            },
            {
               "municipality": "ALVESTA",
               "townships": [
                  {
                     "townshipCode": "07 64  01",
                     "township": "ALVESTA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.37,
                     "sumOfPercentagesExclChurchFeePercentage": 33.32,
                     "municipalityTaxPercentage": 21.42,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.05
                  },
                  {
                     "townshipCode": "07 64  08",
                     "township": "BLÄDINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 34.72,
                     "sumOfPercentagesExclChurchFeePercentage": 33.47,
                     "municipalityTaxPercentage": 21.42,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "07 64  07",
                     "township": "MISTELÅS",
                     "sumOfPercentagesInclChurchFeePercentage": 34.66,
                     "sumOfPercentagesExclChurchFeePercentage": 33.44,
                     "municipalityTaxPercentage": 21.42,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.42,
                     "churchFeePercentage": 1.22
                  },
                  {
                     "townshipCode": "07 64  05",
                     "township": "MOHEDA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.66,
                     "sumOfPercentagesExclChurchFeePercentage": 33.44,
                     "municipalityTaxPercentage": 21.42,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.42,
                     "churchFeePercentage": 1.22
                  },
                  {
                     "townshipCode": "07 64  10",
                     "township": "SKATELÖV",
                     "sumOfPercentagesInclChurchFeePercentage": 34.72,
                     "sumOfPercentagesExclChurchFeePercentage": 33.4,
                     "municipalityTaxPercentage": 21.42,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.32
                  },
                  {
                     "townshipCode": "07 64  06",
                     "township": "SLÄTTHÖG",
                     "sumOfPercentagesInclChurchFeePercentage": 34.66,
                     "sumOfPercentagesExclChurchFeePercentage": 33.44,
                     "municipalityTaxPercentage": 21.42,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.42,
                     "churchFeePercentage": 1.22
                  },
                  {
                     "townshipCode": "07 64  09",
                     "township": "VISLANDA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.72,
                     "sumOfPercentagesExclChurchFeePercentage": 33.47,
                     "municipalityTaxPercentage": 21.42,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "07 64  11",
                     "township": "VÄSTRA TORSÅS",
                     "sumOfPercentagesInclChurchFeePercentage": 34.72,
                     "sumOfPercentagesExclChurchFeePercentage": 33.4,
                     "municipalityTaxPercentage": 21.42,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.32
                  }
               ]
            },
            {
               "municipality": "ANEBY",
               "townships": [
                  {
                     "townshipCode": "06 04  02",
                     "township": "ANEBY",
                     "sumOfPercentagesInclChurchFeePercentage": 35.05,
                     "sumOfPercentagesExclChurchFeePercentage": 33.63,
                     "municipalityTaxPercentage": 22.09,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.42
                  },
                  {
                     "townshipCode": "06 04  03",
                     "township": "ASKERYD",
                     "sumOfPercentagesInclChurchFeePercentage": 35.05,
                     "sumOfPercentagesExclChurchFeePercentage": 33.63,
                     "municipalityTaxPercentage": 22.09,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.42
                  },
                  {
                     "townshipCode": "06 04  05",
                     "township": "FRINNARYD",
                     "sumOfPercentagesInclChurchFeePercentage": 35.05,
                     "sumOfPercentagesExclChurchFeePercentage": 33.63,
                     "municipalityTaxPercentage": 22.09,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.42
                  },
                  {
                     "townshipCode": "06 04  08",
                     "township": "HAURIDA-VIREDA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.05,
                     "sumOfPercentagesExclChurchFeePercentage": 33.63,
                     "municipalityTaxPercentage": 22.09,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.42
                  },
                  {
                     "townshipCode": "06 04  06",
                     "township": "LOMMARYD",
                     "sumOfPercentagesInclChurchFeePercentage": 35.05,
                     "sumOfPercentagesExclChurchFeePercentage": 33.63,
                     "municipalityTaxPercentage": 22.09,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.42
                  }
               ]
            },
            {
               "municipality": "ARBOGA",
               "townships": [
                  {
                     "townshipCode": "19 84  01",
                     "township": "ARBOGA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.29,
                     "sumOfPercentagesExclChurchFeePercentage": 33.16,
                     "municipalityTaxPercentage": 21.86,
                     "countyTaxPercentage": 10.88,
                     "funeralFeePercentage": 0.42,
                     "churchFeePercentage": 1.13
                  }
               ]
            },
            {
               "municipality": "ARJEPLOG",
               "townships": [
                  {
                     "townshipCode": "25 06  02",
                     "township": "ARJEPLOG",
                     "sumOfPercentagesInclChurchFeePercentage": 35.27,
                     "sumOfPercentagesExclChurchFeePercentage": 34.07,
                     "municipalityTaxPercentage": 23.5,
                     "countyTaxPercentage": 10.18,
                     "funeralFeePercentage": 0.39,
                     "churchFeePercentage": 1.2
                  }
               ]
            },
            {
               "municipality": "ARVIDSJAUR",
               "townships": [
                  {
                     "townshipCode": "25 05  02",
                     "township": "ARVIDSJAUR",
                     "sumOfPercentagesInclChurchFeePercentage": 34.52,
                     "sumOfPercentagesExclChurchFeePercentage": 33.46,
                     "municipalityTaxPercentage": 22.8,
                     "countyTaxPercentage": 10.18,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.06
                  }
               ]
            },
            {
               "municipality": "ARVIKA",
               "townships": [
                  {
                     "townshipCode": "17 84  02",
                     "township": "ARVIKA VÄSTRA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.845,
                     "sumOfPercentagesExclChurchFeePercentage": 32.595,
                     "municipalityTaxPercentage": 20.9,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.495,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "17 84  01",
                     "township": "ARVIKA ÖSTRA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.845,
                     "sumOfPercentagesExclChurchFeePercentage": 32.595,
                     "municipalityTaxPercentage": 20.9,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.495,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "17 84  11",
                     "township": "BRUNSKOG",
                     "sumOfPercentagesInclChurchFeePercentage": 33.845,
                     "sumOfPercentagesExclChurchFeePercentage": 32.595,
                     "municipalityTaxPercentage": 20.9,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.495,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "17 84  05",
                     "township": "GLAVA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.845,
                     "sumOfPercentagesExclChurchFeePercentage": 32.595,
                     "municipalityTaxPercentage": 20.9,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.495,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "17 84  07",
                     "township": "GUNNARSKOG",
                     "sumOfPercentagesInclChurchFeePercentage": 33.845,
                     "sumOfPercentagesExclChurchFeePercentage": 32.595,
                     "municipalityTaxPercentage": 20.9,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.495,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "17 84  10",
                     "township": "MANGSKOG",
                     "sumOfPercentagesInclChurchFeePercentage": 33.845,
                     "sumOfPercentagesExclChurchFeePercentage": 32.595,
                     "municipalityTaxPercentage": 20.9,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.495,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "17 84  08",
                     "township": "NY",
                     "sumOfPercentagesInclChurchFeePercentage": 33.845,
                     "sumOfPercentagesExclChurchFeePercentage": 32.595,
                     "municipalityTaxPercentage": 20.9,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.495,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "17 84  03",
                     "township": "STAVNÄS-HÖGERUD",
                     "sumOfPercentagesInclChurchFeePercentage": 33.845,
                     "sumOfPercentagesExclChurchFeePercentage": 32.595,
                     "municipalityTaxPercentage": 20.9,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.495,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "17 84  09",
                     "township": "ÄLGÅ",
                     "sumOfPercentagesInclChurchFeePercentage": 33.845,
                     "sumOfPercentagesExclChurchFeePercentage": 32.595,
                     "municipalityTaxPercentage": 20.9,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.495,
                     "churchFeePercentage": 1.25
                  }
               ]
            },
            {
               "municipality": "ASKERSUND",
               "townships": [
                  {
                     "townshipCode": "18 82  01",
                     "township": "ASKERSUND",
                     "sumOfPercentagesInclChurchFeePercentage": 34.95,
                     "sumOfPercentagesExclChurchFeePercentage": 33.84,
                     "municipalityTaxPercentage": 21.95,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.34,
                     "churchFeePercentage": 1.11
                  },
                  {
                     "townshipCode": "18 82  05",
                     "township": "HAMMAR",
                     "sumOfPercentagesInclChurchFeePercentage": 34.89,
                     "sumOfPercentagesExclChurchFeePercentage": 34.01,
                     "municipalityTaxPercentage": 21.95,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.51,
                     "churchFeePercentage": 0.88
                  },
                  {
                     "townshipCode": "18 82  03",
                     "township": "LERBÄCK",
                     "sumOfPercentagesInclChurchFeePercentage": 35.12,
                     "sumOfPercentagesExclChurchFeePercentage": 33.92,
                     "municipalityTaxPercentage": 21.95,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.42,
                     "churchFeePercentage": 1.2
                  },
                  {
                     "townshipCode": "18 82  04",
                     "township": "SNAVLUNDA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.12,
                     "sumOfPercentagesExclChurchFeePercentage": 33.92,
                     "municipalityTaxPercentage": 21.95,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.42,
                     "churchFeePercentage": 1.2
                  }
               ]
            },
            {
               "municipality": "AVESTA",
               "townships": [
                  {
                     "townshipCode": "20 84  01",
                     "township": "AVESTA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.99,
                     "sumOfPercentagesExclChurchFeePercentage": 33.82,
                     "municipalityTaxPercentage": 22.44,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 1.17
                  },
                  {
                     "townshipCode": "20 84  03",
                     "township": "BY",
                     "sumOfPercentagesInclChurchFeePercentage": 35.18,
                     "sumOfPercentagesExclChurchFeePercentage": 33.9,
                     "municipalityTaxPercentage": 22.44,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.28
                  },
                  {
                     "townshipCode": "20 84  04",
                     "township": "FOLKÄRNA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.18,
                     "sumOfPercentagesExclChurchFeePercentage": 33.9,
                     "municipalityTaxPercentage": 22.44,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.28
                  },
                  {
                     "townshipCode": "20 84  06",
                     "township": "GRYTNÄS",
                     "sumOfPercentagesInclChurchFeePercentage": 34.99,
                     "sumOfPercentagesExclChurchFeePercentage": 33.82,
                     "municipalityTaxPercentage": 22.44,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 1.17
                  }
               ]
            },
            {
               "municipality": "BENGTSFORS",
               "townships": [
                  {
                     "townshipCode": "14 60  09",
                     "township": "BÄCKE-ÖDSKÖLT",
                     "sumOfPercentagesInclChurchFeePercentage": 36.35,
                     "sumOfPercentagesExclChurchFeePercentage": 34.92,
                     "municipalityTaxPercentage": 22.92,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.52,
                     "churchFeePercentage": 1.43
                  },
                  {
                     "townshipCode": "14 60  03",
                     "township": "LAXARBY-VÅRVIK",
                     "sumOfPercentagesInclChurchFeePercentage": 36.35,
                     "sumOfPercentagesExclChurchFeePercentage": 34.85,
                     "municipalityTaxPercentage": 22.92,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.5
                  },
                  {
                     "townshipCode": "14 60  06",
                     "township": "STENEBY-TISSELSKOG",
                     "sumOfPercentagesInclChurchFeePercentage": 36.35,
                     "sumOfPercentagesExclChurchFeePercentage": 34.92,
                     "municipalityTaxPercentage": 22.92,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.52,
                     "churchFeePercentage": 1.43
                  },
                  {
                     "townshipCode": "14 60  05",
                     "township": "TORRSKOG",
                     "sumOfPercentagesInclChurchFeePercentage": 36.35,
                     "sumOfPercentagesExclChurchFeePercentage": 34.85,
                     "municipalityTaxPercentage": 22.92,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.5
                  },
                  {
                     "townshipCode": "14 60  01",
                     "township": "ÄRTEMARK",
                     "sumOfPercentagesInclChurchFeePercentage": 36.35,
                     "sumOfPercentagesExclChurchFeePercentage": 34.85,
                     "municipalityTaxPercentage": 22.92,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.5
                  }
               ]
            },
            {
               "municipality": "BERG",
               "townships": [
                  {
                     "townshipCode": "23 26  01",
                     "township": "BERG",
                     "sumOfPercentagesInclChurchFeePercentage": 35.57,
                     "sumOfPercentagesExclChurchFeePercentage": 34.26,
                     "municipalityTaxPercentage": 22.52,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.54,
                     "churchFeePercentage": 1.31
                  },
                  {
                     "townshipCode": "23 26  02",
                     "township": "HACKÅS",
                     "sumOfPercentagesInclChurchFeePercentage": 35.57,
                     "sumOfPercentagesExclChurchFeePercentage": 34.26,
                     "municipalityTaxPercentage": 22.52,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.54,
                     "churchFeePercentage": 1.31
                  },
                  {
                     "townshipCode": "23 26  05",
                     "township": "HEDEBYGDEN, DEL",
                     "sumOfPercentagesInclChurchFeePercentage": 35.67,
                     "sumOfPercentagesExclChurchFeePercentage": 34.26,
                     "municipalityTaxPercentage": 22.52,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.54,
                     "churchFeePercentage": 1.41
                  },
                  {
                     "townshipCode": "23 26  03",
                     "township": "OVIKEN-MYSSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.57,
                     "sumOfPercentagesExclChurchFeePercentage": 34.26,
                     "municipalityTaxPercentage": 22.52,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.54,
                     "churchFeePercentage": 1.31
                  },
                  {
                     "townshipCode": "23 26  08",
                     "township": "RÄTAN-KLÖVSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.57,
                     "sumOfPercentagesExclChurchFeePercentage": 34.26,
                     "municipalityTaxPercentage": 22.52,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.54,
                     "churchFeePercentage": 1.31
                  },
                  {
                     "townshipCode": "23 26  06",
                     "township": "ÅSARNE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.57,
                     "sumOfPercentagesExclChurchFeePercentage": 34.26,
                     "municipalityTaxPercentage": 22.52,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.54,
                     "churchFeePercentage": 1.31
                  }
               ]
            },
            {
               "municipality": "BJURHOLM",
               "townships": [
                  {
                     "townshipCode": "24 03  01",
                     "township": "BJURHOLM",
                     "sumOfPercentagesInclChurchFeePercentage": 35.19,
                     "sumOfPercentagesExclChurchFeePercentage": 34.22,
                     "municipalityTaxPercentage": 23.1,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 0.97
                  }
               ]
            },
            {
               "municipality": "BJUV",
               "townships": [
                  {
                     "townshipCode": "12 60  01",
                     "township": "BJUV",
                     "sumOfPercentagesInclChurchFeePercentage": 32.81,
                     "sumOfPercentagesExclChurchFeePercentage": 31.81,
                     "municipalityTaxPercentage": 20.89,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 1
                  },
                  {
                     "townshipCode": "12 60  04",
                     "township": "EKEBY",
                     "sumOfPercentagesInclChurchFeePercentage": 32.76,
                     "sumOfPercentagesExclChurchFeePercentage": 31.89,
                     "municipalityTaxPercentage": 20.89,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 0.87
                  }
               ]
            },
            {
               "municipality": "BODEN",
               "townships": [
                  {
                     "townshipCode": "25 82  03",
                     "township": "EDEFORS",
                     "sumOfPercentagesInclChurchFeePercentage": 34.39,
                     "sumOfPercentagesExclChurchFeePercentage": 33.28,
                     "municipalityTaxPercentage": 22.6,
                     "countyTaxPercentage": 10.18,
                     "funeralFeePercentage": 0.5,
                     "churchFeePercentage": 1.11
                  },
                  {
                     "townshipCode": "25 82  02",
                     "township": "GUNNARSBYN",
                     "sumOfPercentagesInclChurchFeePercentage": 33.9,
                     "sumOfPercentagesExclChurchFeePercentage": 33,
                     "municipalityTaxPercentage": 22.6,
                     "countyTaxPercentage": 10.18,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 0.9
                  },
                  {
                     "townshipCode": "25 82  04",
                     "township": "SÄVAST",
                     "sumOfPercentagesInclChurchFeePercentage": 33.9,
                     "sumOfPercentagesExclChurchFeePercentage": 33,
                     "municipalityTaxPercentage": 22.6,
                     "countyTaxPercentage": 10.18,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 0.9
                  },
                  {
                     "townshipCode": "25 82  01",
                     "township": "ÖVERLULEÅ",
                     "sumOfPercentagesInclChurchFeePercentage": 33.9,
                     "sumOfPercentagesExclChurchFeePercentage": 33,
                     "municipalityTaxPercentage": 22.6,
                     "countyTaxPercentage": 10.18,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 0.9
                  }
               ]
            },
            {
               "municipality": "BOLLEBYGD",
               "townships": [
                  {
                     "townshipCode": "14 43  02",
                     "township": "BOLLEBYGD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.43,
                     "sumOfPercentagesExclChurchFeePercentage": 33.3,
                     "municipalityTaxPercentage": 21.59,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 1.13
                  },
                  {
                     "townshipCode": "14 43  01",
                     "township": "TÖLLSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.43,
                     "sumOfPercentagesExclChurchFeePercentage": 33.3,
                     "municipalityTaxPercentage": 21.59,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 1.13
                  }
               ]
            },
            {
               "municipality": "BOLLNÄS",
               "townships": [
                  {
                     "townshipCode": "21 83  09",
                     "township": "ARBRÅ-UNDERSVIK",
                     "sumOfPercentagesInclChurchFeePercentage": 34.76,
                     "sumOfPercentagesExclChurchFeePercentage": 33.74,
                     "municipalityTaxPercentage": 21.86,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.37,
                     "churchFeePercentage": 1.02
                  },
                  {
                     "townshipCode": "21 83  03",
                     "township": "BOLLNÄS",
                     "sumOfPercentagesInclChurchFeePercentage": 34.76,
                     "sumOfPercentagesExclChurchFeePercentage": 33.74,
                     "municipalityTaxPercentage": 21.86,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.37,
                     "churchFeePercentage": 1.02
                  },
                  {
                     "townshipCode": "21 83  06",
                     "township": "HANEBO-SEGERSTA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.76,
                     "sumOfPercentagesExclChurchFeePercentage": 33.74,
                     "municipalityTaxPercentage": 21.86,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.37,
                     "churchFeePercentage": 1.02
                  },
                  {
                     "townshipCode": "21 83  04",
                     "township": "RENGSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.76,
                     "sumOfPercentagesExclChurchFeePercentage": 33.74,
                     "municipalityTaxPercentage": 21.86,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.37,
                     "churchFeePercentage": 1.02
                  }
               ]
            },
            {
               "municipality": "BORGHOLM",
               "townships": [
                  {
                     "townshipCode": "08 85  01",
                     "township": "BORGHOLM",
                     "sumOfPercentagesInclChurchFeePercentage": 34.9,
                     "sumOfPercentagesExclChurchFeePercentage": 33.36,
                     "municipalityTaxPercentage": 21.58,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.41,
                     "churchFeePercentage": 1.54
                  },
                  {
                     "townshipCode": "08 85  02",
                     "township": "FÖRA-ALBÖKE-LÖT",
                     "sumOfPercentagesInclChurchFeePercentage": 34.9,
                     "sumOfPercentagesExclChurchFeePercentage": 33.36,
                     "municipalityTaxPercentage": 21.58,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.41,
                     "churchFeePercentage": 1.54
                  },
                  {
                     "townshipCode": "08 85  10",
                     "township": "GÄRDSLÖSA, LÅNGLÖT OCH RUNSTEN",
                     "sumOfPercentagesInclChurchFeePercentage": 34.9,
                     "sumOfPercentagesExclChurchFeePercentage": 33.36,
                     "municipalityTaxPercentage": 21.58,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.41,
                     "churchFeePercentage": 1.54
                  },
                  {
                     "townshipCode": "08 85  07",
                     "township": "KÖPINGSVIK",
                     "sumOfPercentagesInclChurchFeePercentage": 34.9,
                     "sumOfPercentagesExclChurchFeePercentage": 33.36,
                     "municipalityTaxPercentage": 21.58,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.41,
                     "churchFeePercentage": 1.54
                  },
                  {
                     "townshipCode": "08 85  14",
                     "township": "NORDÖLAND",
                     "sumOfPercentagesInclChurchFeePercentage": 34.9,
                     "sumOfPercentagesExclChurchFeePercentage": 33.36,
                     "municipalityTaxPercentage": 21.58,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.41,
                     "churchFeePercentage": 1.54
                  },
                  {
                     "townshipCode": "08 85  09",
                     "township": "RÄPPLINGE-HÖGSRUM",
                     "sumOfPercentagesInclChurchFeePercentage": 34.9,
                     "sumOfPercentagesExclChurchFeePercentage": 33.36,
                     "municipalityTaxPercentage": 21.58,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.41,
                     "churchFeePercentage": 1.54
                  }
               ]
            },
            {
               "municipality": "BORLÄNGE",
               "townships": [
                  {
                     "townshipCode": "20 81  02",
                     "township": "STORA TUNA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.18,
                     "sumOfPercentagesExclChurchFeePercentage": 34.33,
                     "municipalityTaxPercentage": 22.89,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 0.85
                  },
                  {
                     "townshipCode": "20 81  03",
                     "township": "TORSÅNG",
                     "sumOfPercentagesInclChurchFeePercentage": 35.18,
                     "sumOfPercentagesExclChurchFeePercentage": 34.33,
                     "municipalityTaxPercentage": 22.89,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 0.85
                  }
               ]
            },
            {
               "municipality": "BORÅS",
               "townships": [
                  {
                     "townshipCode": "14 90  01",
                     "township": "BORÅS CAROLI",
                     "sumOfPercentagesInclChurchFeePercentage": 33.74,
                     "sumOfPercentagesExclChurchFeePercentage": 32.75,
                     "municipalityTaxPercentage": 21.06,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.21,
                     "churchFeePercentage": 0.99
                  },
                  {
                     "townshipCode": "14 90  02",
                     "township": "BORÅS GUSTAV ADOLF",
                     "sumOfPercentagesInclChurchFeePercentage": 33.74,
                     "sumOfPercentagesExclChurchFeePercentage": 32.75,
                     "municipalityTaxPercentage": 21.06,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.21,
                     "churchFeePercentage": 0.99
                  },
                  {
                     "townshipCode": "14 90  15",
                     "township": "BREDARED",
                     "sumOfPercentagesInclChurchFeePercentage": 33.83,
                     "sumOfPercentagesExclChurchFeePercentage": 32.71,
                     "municipalityTaxPercentage": 21.06,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.17,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "14 90  03",
                     "township": "BRÄMHULT",
                     "sumOfPercentagesInclChurchFeePercentage": 33.74,
                     "sumOfPercentagesExclChurchFeePercentage": 32.75,
                     "municipalityTaxPercentage": 21.06,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.21,
                     "churchFeePercentage": 0.99
                  },
                  {
                     "townshipCode": "14 90  11",
                     "township": "FRISTAD",
                     "sumOfPercentagesInclChurchFeePercentage": 33.95,
                     "sumOfPercentagesExclChurchFeePercentage": 32.75,
                     "municipalityTaxPercentage": 21.06,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.21,
                     "churchFeePercentage": 1.2
                  },
                  {
                     "townshipCode": "14 90  20",
                     "township": "KINNARUMMA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.02,
                     "sumOfPercentagesExclChurchFeePercentage": 32.74,
                     "municipalityTaxPercentage": 21.06,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 1.28
                  },
                  {
                     "townshipCode": "14 90  07",
                     "township": "LÄNGHEM, DEL",
                     "sumOfPercentagesInclChurchFeePercentage": 34.31,
                     "sumOfPercentagesExclChurchFeePercentage": 32.85,
                     "municipalityTaxPercentage": 21.06,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 1.46
                  },
                  {
                     "townshipCode": "14 90  16",
                     "township": "SANDHULT",
                     "sumOfPercentagesInclChurchFeePercentage": 33.83,
                     "sumOfPercentagesExclChurchFeePercentage": 32.71,
                     "municipalityTaxPercentage": 21.06,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.17,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "14 90  19",
                     "township": "SEGLORA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.02,
                     "sumOfPercentagesExclChurchFeePercentage": 32.74,
                     "municipalityTaxPercentage": 21.06,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 1.28
                  },
                  {
                     "townshipCode": "14 90  08",
                     "township": "SEXDREGA, DEL",
                     "sumOfPercentagesInclChurchFeePercentage": 34.31,
                     "sumOfPercentagesExclChurchFeePercentage": 32.85,
                     "municipalityTaxPercentage": 21.06,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 1.46
                  },
                  {
                     "townshipCode": "14 90  06",
                     "township": "TOARP",
                     "sumOfPercentagesInclChurchFeePercentage": 34.13,
                     "sumOfPercentagesExclChurchFeePercentage": 32.74,
                     "municipalityTaxPercentage": 21.06,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 1.39
                  }
               ]
            },
            {
               "municipality": "BOTKYRKA",
               "townships": [
                  {
                     "townshipCode": "01 27  01",
                     "township": "BOTKYRKA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.36,
                     "sumOfPercentagesExclChurchFeePercentage": 32.42,
                     "municipalityTaxPercentage": 20.13,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.19,
                     "churchFeePercentage": 0.94
                  },
                  {
                     "townshipCode": "01 27  02",
                     "township": "GRÖDINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.39,
                     "sumOfPercentagesExclChurchFeePercentage": 32.38,
                     "municipalityTaxPercentage": 20.13,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.15,
                     "churchFeePercentage": 1.01
                  }
               ]
            },
            {
               "municipality": "BOXHOLM",
               "townships": [
                  {
                     "townshipCode": "05 60  02",
                     "township": "BOXHOLM",
                     "sumOfPercentagesInclChurchFeePercentage": 33.99,
                     "sumOfPercentagesExclChurchFeePercentage": 32.88,
                     "municipalityTaxPercentage": 21.82,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.11
                  }
               ]
            },
            {
               "municipality": "BROMÖLLA",
               "townships": [
                  {
                     "townshipCode": "12 72  01",
                     "township": "IVETOFTA-GUALÖV",
                     "sumOfPercentagesInclChurchFeePercentage": 33.73,
                     "sumOfPercentagesExclChurchFeePercentage": 32.78,
                     "municipalityTaxPercentage": 21.76,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 0.95
                  },
                  {
                     "townshipCode": "12 72  03",
                     "township": "NÄSUM",
                     "sumOfPercentagesInclChurchFeePercentage": 33.73,
                     "sumOfPercentagesExclChurchFeePercentage": 32.78,
                     "municipalityTaxPercentage": 21.76,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 0.95
                  }
               ]
            },
            {
               "municipality": "BRÄCKE",
               "townships": [
                  {
                     "townshipCode": "23 05  01",
                     "township": "BRÄCKE-NYHEM",
                     "sumOfPercentagesInclChurchFeePercentage": 36.59,
                     "sumOfPercentagesExclChurchFeePercentage": 35.09,
                     "municipalityTaxPercentage": 23.39,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.5,
                     "churchFeePercentage": 1.5
                  },
                  {
                     "townshipCode": "23 05  03",
                     "township": "HÄLLESJÖ-HÅSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 36.29,
                     "sumOfPercentagesExclChurchFeePercentage": 35.13,
                     "municipalityTaxPercentage": 23.39,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.54,
                     "churchFeePercentage": 1.16
                  },
                  {
                     "townshipCode": "23 05  06",
                     "township": "REVSUND, SUNDSJÖ, BODSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 36.59,
                     "sumOfPercentagesExclChurchFeePercentage": 35.09,
                     "municipalityTaxPercentage": 23.39,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.5,
                     "churchFeePercentage": 1.5
                  }
               ]
            },
            {
               "municipality": "BURLÖV",
               "townships": [
                  {
                     "townshipCode": "12 31  01",
                     "township": "BURLÖV",
                     "sumOfPercentagesInclChurchFeePercentage": 31.81,
                     "sumOfPercentagesExclChurchFeePercentage": 30.96,
                     "municipalityTaxPercentage": 20.09,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.18,
                     "churchFeePercentage": 0.85
                  }
               ]
            },
            {
               "municipality": "BÅSTAD",
               "townships": [
                  {
                     "townshipCode": "12 78  01",
                     "township": "BÅSTAD-ÖSTRA KARUP",
                     "sumOfPercentagesInclChurchFeePercentage": 32.55,
                     "sumOfPercentagesExclChurchFeePercentage": 31.3,
                     "municipalityTaxPercentage": 20.23,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "12 78  02",
                     "township": "FÖRSLÖV-GREVIE",
                     "sumOfPercentagesInclChurchFeePercentage": 32.5,
                     "sumOfPercentagesExclChurchFeePercentage": 31.24,
                     "municipalityTaxPercentage": 20.23,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.26
                  },
                  {
                     "townshipCode": "12 78  06",
                     "township": "TOREKOV",
                     "sumOfPercentagesInclChurchFeePercentage": 32.55,
                     "sumOfPercentagesExclChurchFeePercentage": 31.22,
                     "municipalityTaxPercentage": 20.23,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.33
                  },
                  {
                     "townshipCode": "12 78  04",
                     "township": "VÄSTRA KARUP-HOV",
                     "sumOfPercentagesInclChurchFeePercentage": 32.55,
                     "sumOfPercentagesExclChurchFeePercentage": 31.22,
                     "municipalityTaxPercentage": 20.23,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.33
                  }
               ]
            },
            {
               "municipality": "DALS-ED",
               "townships": [
                  {
                     "townshipCode": "14 38  03",
                     "township": "DALS-ED",
                     "sumOfPercentagesInclChurchFeePercentage": 36.44,
                     "sumOfPercentagesExclChurchFeePercentage": 35.19,
                     "municipalityTaxPercentage": 23.21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.5,
                     "churchFeePercentage": 1.25
                  }
               ]
            },
            {
               "municipality": "DANDERYD",
               "townships": [
                  {
                     "townshipCode": "01 62  01",
                     "township": "DANDERYD",
                     "sumOfPercentagesInclChurchFeePercentage": 30.3,
                     "sumOfPercentagesExclChurchFeePercentage": 29.57,
                     "municipalityTaxPercentage": 17.35,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.12,
                     "churchFeePercentage": 0.73
                  }
               ]
            },
            {
               "municipality": "DEGERFORS",
               "townships": [
                  {
                     "townshipCode": "18 62  01",
                     "township": "DEGERFORS-NYSUND",
                     "sumOfPercentagesInclChurchFeePercentage": 34.95,
                     "sumOfPercentagesExclChurchFeePercentage": 34.15,
                     "municipalityTaxPercentage": 22.3,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 0.8
                  }
               ]
            },
            {
               "municipality": "DOROTEA",
               "townships": [
                  {
                     "townshipCode": "24 25  01",
                     "township": "DOROTEA-RISBÄCK",
                     "sumOfPercentagesInclChurchFeePercentage": 36.405,
                     "sumOfPercentagesExclChurchFeePercentage": 35.105,
                     "municipalityTaxPercentage": 23.9,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.405,
                     "churchFeePercentage": 1.3
                  }
               ]
            },
            {
               "municipality": "EDA",
               "townships": [
                  {
                     "townshipCode": "17 30  01",
                     "township": "EDA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.23,
                     "sumOfPercentagesExclChurchFeePercentage": 33.93,
                     "municipalityTaxPercentage": 22.25,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.3
                  },
                  {
                     "townshipCode": "17 30  03",
                     "township": "JÄRNSKOG-SKILLINGMARK",
                     "sumOfPercentagesInclChurchFeePercentage": 35.23,
                     "sumOfPercentagesExclChurchFeePercentage": 33.93,
                     "municipalityTaxPercentage": 22.25,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.3
                  },
                  {
                     "townshipCode": "17 30  05",
                     "township": "KÖLA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.23,
                     "sumOfPercentagesExclChurchFeePercentage": 33.93,
                     "municipalityTaxPercentage": 22.25,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.3
                  }
               ]
            },
            {
               "municipality": "EKERÖ",
               "townships": [
                  {
                     "townshipCode": "01 25  01",
                     "township": "ADELSÖ-MUNSÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 32.43,
                     "sumOfPercentagesExclChurchFeePercentage": 31.49,
                     "municipalityTaxPercentage": 19.23,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.16,
                     "churchFeePercentage": 0.94
                  },
                  {
                     "townshipCode": "01 25  03",
                     "township": "EKERÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 32.43,
                     "sumOfPercentagesExclChurchFeePercentage": 31.49,
                     "municipalityTaxPercentage": 19.23,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.16,
                     "churchFeePercentage": 0.94
                  },
                  {
                     "townshipCode": "01 25  09",
                     "township": "FÄRINGSÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 32.43,
                     "sumOfPercentagesExclChurchFeePercentage": 31.47,
                     "municipalityTaxPercentage": 19.23,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.14,
                     "churchFeePercentage": 0.96
                  },
                  {
                     "townshipCode": "01 25  04",
                     "township": "LOVÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 32.43,
                     "sumOfPercentagesExclChurchFeePercentage": 31.49,
                     "municipalityTaxPercentage": 19.23,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.16,
                     "churchFeePercentage": 0.94
                  }
               ]
            },
            {
               "municipality": "EKSJÖ",
               "townships": [
                  {
                     "townshipCode": "06 86  07",
                     "township": "EDSHULT",
                     "sumOfPercentagesInclChurchFeePercentage": 35.27,
                     "sumOfPercentagesExclChurchFeePercentage": 33.87,
                     "municipalityTaxPercentage": 22.26,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.4
                  },
                  {
                     "townshipCode": "06 86  01",
                     "township": "EKSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.27,
                     "sumOfPercentagesExclChurchFeePercentage": 33.87,
                     "municipalityTaxPercentage": 22.26,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.4
                  },
                  {
                     "townshipCode": "06 86  06",
                     "township": "HULT",
                     "sumOfPercentagesInclChurchFeePercentage": 35.27,
                     "sumOfPercentagesExclChurchFeePercentage": 33.87,
                     "municipalityTaxPercentage": 22.26,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.4
                  },
                  {
                     "townshipCode": "06 86  02",
                     "township": "HÄSSLEBY-KRÅKSHULT",
                     "sumOfPercentagesInclChurchFeePercentage": 35.27,
                     "sumOfPercentagesExclChurchFeePercentage": 33.87,
                     "municipalityTaxPercentage": 22.26,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.4
                  },
                  {
                     "townshipCode": "06 86  09",
                     "township": "HÖREDA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.27,
                     "sumOfPercentagesExclChurchFeePercentage": 33.87,
                     "municipalityTaxPercentage": 22.26,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.4
                  },
                  {
                     "townshipCode": "06 86  05",
                     "township": "INGATORP-BELLÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.27,
                     "sumOfPercentagesExclChurchFeePercentage": 33.87,
                     "municipalityTaxPercentage": 22.26,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.4
                  },
                  {
                     "townshipCode": "06 86  08",
                     "township": "MELLBY",
                     "sumOfPercentagesInclChurchFeePercentage": 35.27,
                     "sumOfPercentagesExclChurchFeePercentage": 33.87,
                     "municipalityTaxPercentage": 22.26,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.4
                  }
               ]
            },
            {
               "municipality": "EMMABODA",
               "townships": [
                  {
                     "townshipCode": "08 62  03",
                     "township": "ALGUTSBODA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.5,
                     "sumOfPercentagesExclChurchFeePercentage": 33.4,
                     "municipalityTaxPercentage": 21.71,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.1
                  },
                  {
                     "townshipCode": "08 62  01",
                     "township": "EMMABODA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.5,
                     "sumOfPercentagesExclChurchFeePercentage": 33.4,
                     "municipalityTaxPercentage": 21.71,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.1
                  },
                  {
                     "townshipCode": "08 62  04",
                     "township": "LÅNGASJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.5,
                     "sumOfPercentagesExclChurchFeePercentage": 33.4,
                     "municipalityTaxPercentage": 21.71,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.1
                  },
                  {
                     "townshipCode": "08 62  02",
                     "township": "VISSEFJÄRDA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.5,
                     "sumOfPercentagesExclChurchFeePercentage": 33.4,
                     "municipalityTaxPercentage": 21.71,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.1
                  }
               ]
            },
            {
               "municipality": "ENKÖPING",
               "townships": [
                  {
                     "townshipCode": "03 81  11",
                     "township": "BOGLÖSA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.87,
                     "sumOfPercentagesExclChurchFeePercentage": 32.75,
                     "municipalityTaxPercentage": 21.34,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "03 81  01",
                     "township": "ENKÖPING",
                     "sumOfPercentagesInclChurchFeePercentage": 33.87,
                     "sumOfPercentagesExclChurchFeePercentage": 32.75,
                     "municipalityTaxPercentage": 21.34,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "03 81  31",
                     "township": "FJÄRDHUNDRA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.24,
                     "sumOfPercentagesExclChurchFeePercentage": 32.83,
                     "municipalityTaxPercentage": 21.34,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.41
                  },
                  {
                     "townshipCode": "03 81  30",
                     "township": "LAGUNDA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.32,
                     "sumOfPercentagesExclChurchFeePercentage": 32.87,
                     "municipalityTaxPercentage": 21.34,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.37,
                     "churchFeePercentage": 1.45
                  },
                  {
                     "townshipCode": "03 81  07",
                     "township": "SPARRSÄTRA-BRED",
                     "sumOfPercentagesInclChurchFeePercentage": 33.87,
                     "sumOfPercentagesExclChurchFeePercentage": 32.75,
                     "municipalityTaxPercentage": 21.34,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "03 81  05",
                     "township": "TILLINGE OCH SÖDRA ÅSUNDA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.87,
                     "sumOfPercentagesExclChurchFeePercentage": 32.75,
                     "municipalityTaxPercentage": 21.34,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "03 81  14",
                     "township": "VECKHOLM",
                     "sumOfPercentagesInclChurchFeePercentage": 33.87,
                     "sumOfPercentagesExclChurchFeePercentage": 32.75,
                     "municipalityTaxPercentage": 21.34,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "03 81  17",
                     "township": "VILLBERGA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.87,
                     "sumOfPercentagesExclChurchFeePercentage": 32.75,
                     "municipalityTaxPercentage": 21.34,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.12
                  }
               ]
            },
            {
               "municipality": "ESKILSTUNA",
               "townships": [
                  {
                     "townshipCode": "04 84  02",
                     "township": "ESKILSTUNA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.95,
                     "sumOfPercentagesExclChurchFeePercentage": 33.07,
                     "municipalityTaxPercentage": 22.08,
                     "countyTaxPercentage": 10.77,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 0.88
                  },
                  {
                     "townshipCode": "04 84  18",
                     "township": "HUSBY-REKARNE",
                     "sumOfPercentagesInclChurchFeePercentage": 34.14,
                     "sumOfPercentagesExclChurchFeePercentage": 33.12,
                     "municipalityTaxPercentage": 22.08,
                     "countyTaxPercentage": 10.77,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.02
                  },
                  {
                     "townshipCode": "04 84  10",
                     "township": "HÄLLBY FÖRS. MED TUMBO OCH RÅBY-REKA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.3,
                     "sumOfPercentagesExclChurchFeePercentage": 33.16,
                     "municipalityTaxPercentage": 22.08,
                     "countyTaxPercentage": 10.77,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 1.14
                  },
                  {
                     "townshipCode": "04 84  21",
                     "township": "KAFJÄRDEN",
                     "sumOfPercentagesInclChurchFeePercentage": 34.01,
                     "sumOfPercentagesExclChurchFeePercentage": 33.17,
                     "municipalityTaxPercentage": 22.08,
                     "countyTaxPercentage": 10.77,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 0.84
                  },
                  {
                     "townshipCode": "04 84  17",
                     "township": "NÄSHULTA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.14,
                     "sumOfPercentagesExclChurchFeePercentage": 33.12,
                     "municipalityTaxPercentage": 22.08,
                     "countyTaxPercentage": 10.77,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.02
                  },
                  {
                     "townshipCode": "04 84  20",
                     "township": "STENKVISTA-ÄRLA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.33,
                     "sumOfPercentagesExclChurchFeePercentage": 33.12,
                     "municipalityTaxPercentage": 22.08,
                     "countyTaxPercentage": 10.77,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.21
                  },
                  {
                     "townshipCode": "04 84  03",
                     "township": "TORSHÄLLA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.04,
                     "sumOfPercentagesExclChurchFeePercentage": 33.1,
                     "municipalityTaxPercentage": 22.08,
                     "countyTaxPercentage": 10.77,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 0.94
                  },
                  {
                     "townshipCode": "04 84  13",
                     "township": "VÄSTRA REKARNE",
                     "sumOfPercentagesInclChurchFeePercentage": 34.45,
                     "sumOfPercentagesExclChurchFeePercentage": 33.23,
                     "municipalityTaxPercentage": 22.08,
                     "countyTaxPercentage": 10.77,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.22
                  }
               ]
            },
            {
               "municipality": "ESLÖV",
               "townships": [
                  {
                     "townshipCode": "12 85  01",
                     "township": "ESLÖV",
                     "sumOfPercentagesInclChurchFeePercentage": 32.19,
                     "sumOfPercentagesExclChurchFeePercentage": 31.25,
                     "municipalityTaxPercentage": 20.24,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 0.94
                  },
                  {
                     "townshipCode": "12 85  13",
                     "township": "LÖBERÖD",
                     "sumOfPercentagesInclChurchFeePercentage": 32.57,
                     "sumOfPercentagesExclChurchFeePercentage": 31.28,
                     "municipalityTaxPercentage": 20.24,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.29
                  },
                  {
                     "townshipCode": "12 85  11",
                     "township": "MARIEHOLM",
                     "sumOfPercentagesInclChurchFeePercentage": 32.19,
                     "sumOfPercentagesExclChurchFeePercentage": 31.25,
                     "municipalityTaxPercentage": 20.24,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 0.94
                  },
                  {
                     "townshipCode": "12 85  09",
                     "township": "RINGSJÖ, DEL",
                     "sumOfPercentagesInclChurchFeePercentage": 32.44,
                     "sumOfPercentagesExclChurchFeePercentage": 31.26,
                     "municipalityTaxPercentage": 20.24,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.18
                  },
                  {
                     "townshipCode": "12 85  02",
                     "township": "ÖSTRA ONSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 32.19,
                     "sumOfPercentagesExclChurchFeePercentage": 31.25,
                     "municipalityTaxPercentage": 20.24,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 0.94
                  }
               ]
            },
            {
               "municipality": "ESSUNGA",
               "townships": [
                  {
                     "townshipCode": "14 45  04",
                     "township": "ESSUNGA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.91,
                     "sumOfPercentagesExclChurchFeePercentage": 33.53,
                     "municipalityTaxPercentage": 21.57,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.38
                  },
                  {
                     "townshipCode": "14 45  01",
                     "township": "FRIDHEM, DEL",
                     "sumOfPercentagesInclChurchFeePercentage": 34.65,
                     "sumOfPercentagesExclChurchFeePercentage": 33.53,
                     "municipalityTaxPercentage": 21.57,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "14 45  02",
                     "township": "FRÄMMESTAD-BÄREBERG",
                     "sumOfPercentagesInclChurchFeePercentage": 34.91,
                     "sumOfPercentagesExclChurchFeePercentage": 33.53,
                     "municipalityTaxPercentage": 21.57,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.38
                  },
                  {
                     "townshipCode": "14 45  07",
                     "township": "LEKÅSA-BARNE ÅSAKA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.91,
                     "sumOfPercentagesExclChurchFeePercentage": 33.53,
                     "municipalityTaxPercentage": 21.57,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.38
                  }
               ]
            },
            {
               "municipality": "FAGERSTA",
               "townships": [
                  {
                     "townshipCode": "19 82  01",
                     "township": "VÄSTANFORS-VÄSTERVÅLA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.48,
                     "sumOfPercentagesExclChurchFeePercentage": 33.27,
                     "municipalityTaxPercentage": 22.11,
                     "countyTaxPercentage": 10.88,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.21
                  }
               ]
            },
            {
               "municipality": "FALKENBERG",
               "townships": [
                  {
                     "townshipCode": "13 82  21",
                     "township": "FAGERED",
                     "sumOfPercentagesInclChurchFeePercentage": 33.65,
                     "sumOfPercentagesExclChurchFeePercentage": 32.17,
                     "municipalityTaxPercentage": 21.1,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.48
                  },
                  {
                     "townshipCode": "13 82  01",
                     "township": "FALKENBERG",
                     "sumOfPercentagesInclChurchFeePercentage": 33.34,
                     "sumOfPercentagesExclChurchFeePercentage": 32.18,
                     "municipalityTaxPercentage": 21.1,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.26,
                     "churchFeePercentage": 1.16
                  },
                  {
                     "townshipCode": "13 82  20",
                     "township": "GUNNARP",
                     "sumOfPercentagesInclChurchFeePercentage": 33.7,
                     "sumOfPercentagesExclChurchFeePercentage": 32.38,
                     "municipalityTaxPercentage": 21.1,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.46,
                     "churchFeePercentage": 1.32
                  },
                  {
                     "townshipCode": "13 82  18",
                     "township": "GÄLLARED",
                     "sumOfPercentagesInclChurchFeePercentage": 33.7,
                     "sumOfPercentagesExclChurchFeePercentage": 32.38,
                     "municipalityTaxPercentage": 21.1,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.46,
                     "churchFeePercentage": 1.32
                  },
                  {
                     "townshipCode": "13 82  19",
                     "township": "KROGSERED",
                     "sumOfPercentagesInclChurchFeePercentage": 33.7,
                     "sumOfPercentagesExclChurchFeePercentage": 32.38,
                     "municipalityTaxPercentage": 21.1,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.46,
                     "churchFeePercentage": 1.32
                  },
                  {
                     "townshipCode": "13 82  22",
                     "township": "KÄLLSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 33.65,
                     "sumOfPercentagesExclChurchFeePercentage": 32.17,
                     "municipalityTaxPercentage": 21.1,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.48
                  },
                  {
                     "townshipCode": "13 82  09",
                     "township": "MORUP",
                     "sumOfPercentagesInclChurchFeePercentage": 33.55,
                     "sumOfPercentagesExclChurchFeePercentage": 32.22,
                     "municipalityTaxPercentage": 21.1,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.33
                  },
                  {
                     "townshipCode": "13 82  17",
                     "township": "OKOME",
                     "sumOfPercentagesInclChurchFeePercentage": 33.81,
                     "sumOfPercentagesExclChurchFeePercentage": 32.39,
                     "municipalityTaxPercentage": 21.1,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.47,
                     "churchFeePercentage": 1.42
                  },
                  {
                     "townshipCode": "13 82  02",
                     "township": "SKREA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.34,
                     "sumOfPercentagesExclChurchFeePercentage": 32.18,
                     "municipalityTaxPercentage": 21.1,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.26,
                     "churchFeePercentage": 1.16
                  },
                  {
                     "townshipCode": "13 82  08",
                     "township": "STAFSINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.57,
                     "sumOfPercentagesExclChurchFeePercentage": 32.18,
                     "municipalityTaxPercentage": 21.1,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.26,
                     "churchFeePercentage": 1.39
                  },
                  {
                     "townshipCode": "13 82  06",
                     "township": "SUSEDALEN",
                     "sumOfPercentagesInclChurchFeePercentage": 33.84,
                     "sumOfPercentagesExclChurchFeePercentage": 32.3,
                     "municipalityTaxPercentage": 21.1,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.54
                  },
                  {
                     "townshipCode": "13 82  23",
                     "township": "ULLARED",
                     "sumOfPercentagesInclChurchFeePercentage": 33.65,
                     "sumOfPercentagesExclChurchFeePercentage": 32.17,
                     "municipalityTaxPercentage": 21.1,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.48
                  },
                  {
                     "townshipCode": "13 82  13",
                     "township": "VESSIGE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.81,
                     "sumOfPercentagesExclChurchFeePercentage": 32.39,
                     "municipalityTaxPercentage": 21.1,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.47,
                     "churchFeePercentage": 1.42
                  },
                  {
                     "townshipCode": "13 82  11",
                     "township": "VINBERG-LJUNGBY",
                     "sumOfPercentagesInclChurchFeePercentage": 33.42,
                     "sumOfPercentagesExclChurchFeePercentage": 32.21,
                     "municipalityTaxPercentage": 21.1,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.21
                  },
                  {
                     "townshipCode": "13 82  24",
                     "township": "ÄLVSERED",
                     "sumOfPercentagesInclChurchFeePercentage": 33.65,
                     "sumOfPercentagesExclChurchFeePercentage": 32.17,
                     "municipalityTaxPercentage": 21.1,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.48
                  }
               ]
            },
            {
               "municipality": "FALKÖPING",
               "townships": [
                  {
                     "townshipCode": "14 99  33",
                     "township": "DALA-BORGUNDA-HÖGSTENA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.98,
                     "sumOfPercentagesExclChurchFeePercentage": 33.51,
                     "municipalityTaxPercentage": 21.6,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.47
                  },
                  {
                     "townshipCode": "14 99  01",
                     "township": "FALKÖPING",
                     "sumOfPercentagesInclChurchFeePercentage": 34.66,
                     "sumOfPercentagesExclChurchFeePercentage": 33.44,
                     "municipalityTaxPercentage": 21.6,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.22
                  },
                  {
                     "townshipCode": "14 99  05",
                     "township": "FLOBY",
                     "sumOfPercentagesInclChurchFeePercentage": 35.15,
                     "sumOfPercentagesExclChurchFeePercentage": 33.68,
                     "municipalityTaxPercentage": 21.6,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.6,
                     "churchFeePercentage": 1.47
                  },
                  {
                     "townshipCode": "14 99  41",
                     "township": "GUDHEM",
                     "sumOfPercentagesInclChurchFeePercentage": 34.98,
                     "sumOfPercentagesExclChurchFeePercentage": 33.51,
                     "municipalityTaxPercentage": 21.6,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.47
                  },
                  {
                     "townshipCode": "14 99  47",
                     "township": "HORNBORGA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.98,
                     "sumOfPercentagesExclChurchFeePercentage": 33.51,
                     "municipalityTaxPercentage": 21.6,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.47
                  },
                  {
                     "townshipCode": "14 99  16",
                     "township": "KINNEVED",
                     "sumOfPercentagesInclChurchFeePercentage": 35.15,
                     "sumOfPercentagesExclChurchFeePercentage": 33.68,
                     "municipalityTaxPercentage": 21.6,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.6,
                     "churchFeePercentage": 1.47
                  },
                  {
                     "townshipCode": "14 99  02",
                     "township": "MÖSSEBERG",
                     "sumOfPercentagesInclChurchFeePercentage": 34.66,
                     "sumOfPercentagesExclChurchFeePercentage": 33.44,
                     "municipalityTaxPercentage": 21.6,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.22
                  },
                  {
                     "townshipCode": "14 99  24",
                     "township": "SLÖTA-KARLEBY",
                     "sumOfPercentagesInclChurchFeePercentage": 34.66,
                     "sumOfPercentagesExclChurchFeePercentage": 33.44,
                     "municipalityTaxPercentage": 21.6,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.22
                  },
                  {
                     "townshipCode": "14 99  34",
                     "township": "STENSTORP",
                     "sumOfPercentagesInclChurchFeePercentage": 34.98,
                     "sumOfPercentagesExclChurchFeePercentage": 33.51,
                     "municipalityTaxPercentage": 21.6,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.47
                  },
                  {
                     "townshipCode": "14 99  28",
                     "township": "YLLESTAD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.66,
                     "sumOfPercentagesExclChurchFeePercentage": 33.44,
                     "municipalityTaxPercentage": 21.6,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.22
                  },
                  {
                     "townshipCode": "14 99  51",
                     "township": "ÅSARP",
                     "sumOfPercentagesInclChurchFeePercentage": 35.15,
                     "sumOfPercentagesExclChurchFeePercentage": 33.68,
                     "municipalityTaxPercentage": 21.6,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.6,
                     "churchFeePercentage": 1.47
                  },
                  {
                     "townshipCode": "14 99  21",
                     "township": "ÅSLEBYGDEN",
                     "sumOfPercentagesInclChurchFeePercentage": 34.66,
                     "sumOfPercentagesExclChurchFeePercentage": 33.44,
                     "municipalityTaxPercentage": 21.6,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.22
                  }
               ]
            },
            {
               "municipality": "FALUN",
               "townships": [
                  {
                     "townshipCode": "20 80  04",
                     "township": "ASPEBODA",
                     "sumOfPercentagesInclChurchFeePercentage": 35,
                     "sumOfPercentagesExclChurchFeePercentage": 33.99,
                     "municipalityTaxPercentage": 22.54,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.01
                  },
                  {
                     "townshipCode": "20 80  11",
                     "township": "BJURSÅS",
                     "sumOfPercentagesInclChurchFeePercentage": 35.21,
                     "sumOfPercentagesExclChurchFeePercentage": 33.98,
                     "municipalityTaxPercentage": 22.54,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.23
                  },
                  {
                     "townshipCode": "20 80  10",
                     "township": "ENVIKEN",
                     "sumOfPercentagesInclChurchFeePercentage": 35.28,
                     "sumOfPercentagesExclChurchFeePercentage": 33.98,
                     "municipalityTaxPercentage": 22.54,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.3
                  },
                  {
                     "townshipCode": "20 80  01",
                     "township": "FALU KRISTINE",
                     "sumOfPercentagesInclChurchFeePercentage": 35,
                     "sumOfPercentagesExclChurchFeePercentage": 33.99,
                     "municipalityTaxPercentage": 22.54,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.01
                  },
                  {
                     "townshipCode": "20 80  02",
                     "township": "GRYCKSBO",
                     "sumOfPercentagesInclChurchFeePercentage": 35,
                     "sumOfPercentagesExclChurchFeePercentage": 33.99,
                     "municipalityTaxPercentage": 22.54,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.01
                  },
                  {
                     "townshipCode": "20 80  03",
                     "township": "STORA KOPPARBERG",
                     "sumOfPercentagesInclChurchFeePercentage": 35,
                     "sumOfPercentagesExclChurchFeePercentage": 33.99,
                     "municipalityTaxPercentage": 22.54,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.01
                  },
                  {
                     "townshipCode": "20 80  07",
                     "township": "SUNDBORN",
                     "sumOfPercentagesInclChurchFeePercentage": 35.17,
                     "sumOfPercentagesExclChurchFeePercentage": 33.87,
                     "municipalityTaxPercentage": 22.54,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.17,
                     "churchFeePercentage": 1.3
                  },
                  {
                     "townshipCode": "20 80  08",
                     "township": "SVÄRDSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.28,
                     "sumOfPercentagesExclChurchFeePercentage": 33.98,
                     "municipalityTaxPercentage": 22.54,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.3
                  },
                  {
                     "townshipCode": "20 80  06",
                     "township": "VIKA-HOSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 35,
                     "sumOfPercentagesExclChurchFeePercentage": 33.99,
                     "municipalityTaxPercentage": 22.54,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.01
                  }
               ]
            },
            {
               "municipality": "FILIPSTAD",
               "townships": [
                  {
                     "townshipCode": "17 82  01",
                     "township": "FILIPSTAD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.97,
                     "sumOfPercentagesExclChurchFeePercentage": 33.78,
                     "municipalityTaxPercentage": 22,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.58,
                     "churchFeePercentage": 1.19
                  }
               ]
            },
            {
               "municipality": "FINSPÅNG",
               "townships": [
                  {
                     "townshipCode": "05 62  01",
                     "township": "FINSPÅNG",
                     "sumOfPercentagesInclChurchFeePercentage": 34.15,
                     "sumOfPercentagesExclChurchFeePercentage": 33.15,
                     "municipalityTaxPercentage": 22.15,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1
                  }
               ]
            },
            {
               "municipality": "FLEN",
               "townships": [
                  {
                     "townshipCode": "04 82  08",
                     "township": "BETTNA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.82,
                     "sumOfPercentagesExclChurchFeePercentage": 33.46,
                     "municipalityTaxPercentage": 22.33,
                     "countyTaxPercentage": 10.77,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.36
                  },
                  {
                     "townshipCode": "04 82  05",
                     "township": "DUNKER-LILLA MALMA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.68,
                     "sumOfPercentagesExclChurchFeePercentage": 33.42,
                     "municipalityTaxPercentage": 22.33,
                     "countyTaxPercentage": 10.77,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.26
                  },
                  {
                     "townshipCode": "04 82  01",
                     "township": "FLEN, HELGESTA-HYLTINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 34.34,
                     "sumOfPercentagesExclChurchFeePercentage": 33.44,
                     "municipalityTaxPercentage": 22.33,
                     "countyTaxPercentage": 10.77,
                     "funeralFeePercentage": 0.34,
                     "churchFeePercentage": 0.9
                  },
                  {
                     "townshipCode": "04 82  07",
                     "township": "MELLÖSA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.96,
                     "sumOfPercentagesExclChurchFeePercentage": 33.49,
                     "municipalityTaxPercentage": 22.33,
                     "countyTaxPercentage": 10.77,
                     "funeralFeePercentage": 0.39,
                     "churchFeePercentage": 1.47
                  }
               ]
            },
            {
               "municipality": "FORSHAGA",
               "townships": [
                  {
                     "townshipCode": "17 63  01",
                     "township": "FORSHAGA-MUNKFORS, DEL",
                     "sumOfPercentagesInclChurchFeePercentage": 35,
                     "sumOfPercentagesExclChurchFeePercentage": 33.92,
                     "municipalityTaxPercentage": 22.35,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.37,
                     "churchFeePercentage": 1.08
                  }
               ]
            },
            {
               "municipality": "FÄRGELANDA",
               "townships": [
                  {
                     "townshipCode": "14 39  01",
                     "township": "FÄRGELANDA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.19,
                     "sumOfPercentagesExclChurchFeePercentage": 34.11,
                     "municipalityTaxPercentage": 22.26,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.37,
                     "churchFeePercentage": 1.08
                  },
                  {
                     "townshipCode": "14 39  08",
                     "township": "HÖGSÄTER",
                     "sumOfPercentagesInclChurchFeePercentage": 35.6,
                     "sumOfPercentagesExclChurchFeePercentage": 34.3,
                     "municipalityTaxPercentage": 22.26,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.56,
                     "churchFeePercentage": 1.3
                  },
                  {
                     "townshipCode": "14 39  04",
                     "township": "JÄRBO-RÅGGÄRD",
                     "sumOfPercentagesInclChurchFeePercentage": 35.6,
                     "sumOfPercentagesExclChurchFeePercentage": 34.3,
                     "municipalityTaxPercentage": 22.26,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.56,
                     "churchFeePercentage": 1.3
                  },
                  {
                     "townshipCode": "14 39  07",
                     "township": "RÄNNELANDA-LERDAL",
                     "sumOfPercentagesInclChurchFeePercentage": 35.6,
                     "sumOfPercentagesExclChurchFeePercentage": 34.3,
                     "municipalityTaxPercentage": 22.26,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.56,
                     "churchFeePercentage": 1.3
                  }
               ]
            },
            {
               "municipality": "GAGNEF",
               "townships": [
                  {
                     "townshipCode": "20 26  03",
                     "township": "FLODA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.41,
                     "sumOfPercentagesExclChurchFeePercentage": 34.23,
                     "municipalityTaxPercentage": 22.72,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.18
                  },
                  {
                     "townshipCode": "20 26  02",
                     "township": "GAGNEF",
                     "sumOfPercentagesInclChurchFeePercentage": 35.41,
                     "sumOfPercentagesExclChurchFeePercentage": 34.23,
                     "municipalityTaxPercentage": 22.72,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.18
                  },
                  {
                     "townshipCode": "20 26  01",
                     "township": "MOCKFJÄRD",
                     "sumOfPercentagesInclChurchFeePercentage": 35.41,
                     "sumOfPercentagesExclChurchFeePercentage": 34.23,
                     "municipalityTaxPercentage": 22.72,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.18
                  }
               ]
            },
            {
               "municipality": "GISLAVED",
               "townships": [
                  {
                     "townshipCode": "06 62  04",
                     "township": "ANDERSTORP",
                     "sumOfPercentagesInclChurchFeePercentage": 34.64,
                     "sumOfPercentagesExclChurchFeePercentage": 33.58,
                     "municipalityTaxPercentage": 22.13,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.19,
                     "churchFeePercentage": 1.06
                  },
                  {
                     "townshipCode": "06 62  03",
                     "township": "BOSEBO",
                     "sumOfPercentagesInclChurchFeePercentage": 34.71,
                     "sumOfPercentagesExclChurchFeePercentage": 33.7,
                     "municipalityTaxPercentage": 22.13,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 1.01
                  },
                  {
                     "townshipCode": "06 62  10",
                     "township": "BURSERYD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.96,
                     "sumOfPercentagesExclChurchFeePercentage": 33.68,
                     "municipalityTaxPercentage": 22.13,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.28
                  },
                  {
                     "townshipCode": "06 62  01",
                     "township": "GISLAVED",
                     "sumOfPercentagesInclChurchFeePercentage": 34.71,
                     "sumOfPercentagesExclChurchFeePercentage": 33.7,
                     "municipalityTaxPercentage": 22.13,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 1.01
                  },
                  {
                     "townshipCode": "06 62  08",
                     "township": "NORRA HESTRA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.23,
                     "sumOfPercentagesExclChurchFeePercentage": 33.75,
                     "municipalityTaxPercentage": 22.13,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.48
                  },
                  {
                     "townshipCode": "06 62  09",
                     "township": "VILLSTAD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.62,
                     "sumOfPercentagesExclChurchFeePercentage": 33.63,
                     "municipalityTaxPercentage": 22.13,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 0.99
                  },
                  {
                     "townshipCode": "06 62  16",
                     "township": "VÄSTBO S:T SIGFRID",
                     "sumOfPercentagesInclChurchFeePercentage": 35.29,
                     "sumOfPercentagesExclChurchFeePercentage": 33.74,
                     "municipalityTaxPercentage": 22.13,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.55
                  },
                  {
                     "townshipCode": "06 62  02",
                     "township": "VÅTHULT",
                     "sumOfPercentagesInclChurchFeePercentage": 34.71,
                     "sumOfPercentagesExclChurchFeePercentage": 33.7,
                     "municipalityTaxPercentage": 22.13,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 1.01
                  }
               ]
            },
            {
               "municipality": "GNESTA",
               "townships": [
                  {
                     "townshipCode": "04 61  04",
                     "township": "DAGA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.55,
                     "sumOfPercentagesExclChurchFeePercentage": 33.23,
                     "municipalityTaxPercentage": 22.18,
                     "countyTaxPercentage": 10.77,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.32
                  },
                  {
                     "townshipCode": "04 61  01",
                     "township": "FRUSTUNA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.49,
                     "sumOfPercentagesExclChurchFeePercentage": 33.2,
                     "municipalityTaxPercentage": 22.18,
                     "countyTaxPercentage": 10.77,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.29
                  }
               ]
            },
            {
               "municipality": "GNOSJÖ",
               "townships": [
                  {
                     "townshipCode": "06 17  05",
                     "township": "GNOSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.78,
                     "sumOfPercentagesExclChurchFeePercentage": 33.72,
                     "municipalityTaxPercentage": 22.24,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 1.06
                  },
                  {
                     "townshipCode": "06 17  04",
                     "township": "KULLTORP, DEL",
                     "sumOfPercentagesInclChurchFeePercentage": 35.11,
                     "sumOfPercentagesExclChurchFeePercentage": 33.81,
                     "municipalityTaxPercentage": 22.24,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 1.3
                  },
                  {
                     "townshipCode": "06 17  01",
                     "township": "KÄLLERYD",
                     "sumOfPercentagesInclChurchFeePercentage": 35.17,
                     "sumOfPercentagesExclChurchFeePercentage": 33.82,
                     "municipalityTaxPercentage": 22.24,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.35
                  },
                  {
                     "townshipCode": "06 17  03",
                     "township": "KÄVSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.17,
                     "sumOfPercentagesExclChurchFeePercentage": 33.82,
                     "municipalityTaxPercentage": 22.24,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.35
                  },
                  {
                     "townshipCode": "06 17  02",
                     "township": "ÅSENHÖGA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.17,
                     "sumOfPercentagesExclChurchFeePercentage": 33.82,
                     "municipalityTaxPercentage": 22.24,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.35
                  }
               ]
            },
            {
               "municipality": "GOTLAND",
               "townships": [
                  {
                     "townshipCode": "09 80  34",
                     "township": "AKEBÄCK",
                     "sumOfPercentagesInclChurchFeePercentage": 35.5,
                     "sumOfPercentagesExclChurchFeePercentage": 34.04,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.44,
                     "churchFeePercentage": 1.46
                  },
                  {
                     "townshipCode": "09 80  76",
                     "township": "ALVA, HEMSE OCH RONE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.43,
                     "sumOfPercentagesExclChurchFeePercentage": 34,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.43
                  },
                  {
                     "townshipCode": "09 80  30",
                     "township": "BARLINGBO",
                     "sumOfPercentagesInclChurchFeePercentage": 35.5,
                     "sumOfPercentagesExclChurchFeePercentage": 34.04,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.44,
                     "churchFeePercentage": 1.46
                  },
                  {
                     "townshipCode": "09 80  36",
                     "township": "BJÖRKE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.5,
                     "sumOfPercentagesExclChurchFeePercentage": 34.04,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.44,
                     "churchFeePercentage": 1.46
                  },
                  {
                     "townshipCode": "09 80  05",
                     "township": "BUNGE, RUTE OCH FLERINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.64,
                     "sumOfPercentagesExclChurchFeePercentage": 33.98,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.66
                  },
                  {
                     "townshipCode": "09 80  29",
                     "township": "DALHEM",
                     "sumOfPercentagesInclChurchFeePercentage": 35.74,
                     "sumOfPercentagesExclChurchFeePercentage": 34,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.74
                  },
                  {
                     "townshipCode": "09 80  63",
                     "township": "EKSTA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.59,
                     "sumOfPercentagesExclChurchFeePercentage": 33.95,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.64
                  },
                  {
                     "townshipCode": "09 80  31",
                     "township": "ENDRE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.5,
                     "sumOfPercentagesExclChurchFeePercentage": 34.04,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.44,
                     "churchFeePercentage": 1.46
                  },
                  {
                     "townshipCode": "09 80  55",
                     "township": "ESKELHEM-TOFTA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.21,
                     "sumOfPercentagesExclChurchFeePercentage": 33.93,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.28
                  },
                  {
                     "townshipCode": "09 80  79",
                     "township": "FARDHEM",
                     "sumOfPercentagesInclChurchFeePercentage": 35.79,
                     "sumOfPercentagesExclChurchFeePercentage": 34.08,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.71
                  },
                  {
                     "townshipCode": "09 80  33",
                     "township": "FOLLINGBO",
                     "sumOfPercentagesInclChurchFeePercentage": 35.5,
                     "sumOfPercentagesExclChurchFeePercentage": 34.04,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.44,
                     "churchFeePercentage": 1.46
                  },
                  {
                     "townshipCode": "09 80  10",
                     "township": "FORSA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.64,
                     "sumOfPercentagesExclChurchFeePercentage": 33.98,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.66
                  },
                  {
                     "townshipCode": "09 80  62",
                     "township": "FRÖJEL",
                     "sumOfPercentagesInclChurchFeePercentage": 35.59,
                     "sumOfPercentagesExclChurchFeePercentage": 33.95,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.64
                  },
                  {
                     "townshipCode": "09 80  04",
                     "township": "FÅRÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.64,
                     "sumOfPercentagesExclChurchFeePercentage": 33.98,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.66
                  },
                  {
                     "townshipCode": "09 80  65",
                     "township": "GARDE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.59,
                     "sumOfPercentagesExclChurchFeePercentage": 33.99,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.39,
                     "churchFeePercentage": 1.6
                  },
                  {
                     "townshipCode": "09 80  80",
                     "township": "GERUM",
                     "sumOfPercentagesInclChurchFeePercentage": 35.79,
                     "sumOfPercentagesExclChurchFeePercentage": 34.08,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.71
                  },
                  {
                     "townshipCode": "09 80  25",
                     "township": "GOTHEM",
                     "sumOfPercentagesInclChurchFeePercentage": 35.64,
                     "sumOfPercentagesExclChurchFeePercentage": 33.98,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.66
                  },
                  {
                     "townshipCode": "09 80  84",
                     "township": "HAVDHEM",
                     "sumOfPercentagesInclChurchFeePercentage": 35.56,
                     "sumOfPercentagesExclChurchFeePercentage": 34.1,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.5,
                     "churchFeePercentage": 1.46
                  },
                  {
                     "townshipCode": "09 80  60",
                     "township": "HEJDE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.59,
                     "sumOfPercentagesExclChurchFeePercentage": 33.95,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.64
                  },
                  {
                     "townshipCode": "09 80  32",
                     "township": "HEJDEBY",
                     "sumOfPercentagesInclChurchFeePercentage": 35.5,
                     "sumOfPercentagesExclChurchFeePercentage": 34.04,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.44,
                     "churchFeePercentage": 1.46
                  },
                  {
                     "townshipCode": "09 80  89",
                     "township": "HOBURG",
                     "sumOfPercentagesInclChurchFeePercentage": 35.7,
                     "sumOfPercentagesExclChurchFeePercentage": 34.2,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.6,
                     "churchFeePercentage": 1.5
                  },
                  {
                     "townshipCode": "09 80  61",
                     "township": "KLINTE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.59,
                     "sumOfPercentagesExclChurchFeePercentage": 33.95,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.64
                  },
                  {
                     "townshipCode": "09 80  81",
                     "township": "LEVIDE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.79,
                     "sumOfPercentagesExclChurchFeePercentage": 34.08,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.71
                  },
                  {
                     "townshipCode": "09 80  75",
                     "township": "LINDE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.79,
                     "sumOfPercentagesExclChurchFeePercentage": 34.08,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.71
                  },
                  {
                     "townshipCode": "09 80  74",
                     "township": "LOJSTA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.79,
                     "sumOfPercentagesExclChurchFeePercentage": 34.08,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.71
                  },
                  {
                     "townshipCode": "09 80  71",
                     "township": "NÄR-LAU",
                     "sumOfPercentagesInclChurchFeePercentage": 35.46,
                     "sumOfPercentagesExclChurchFeePercentage": 34,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.46
                  },
                  {
                     "townshipCode": "09 80  02",
                     "township": "OTHEM-BOGE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.64,
                     "sumOfPercentagesExclChurchFeePercentage": 33.98,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.66
                  },
                  {
                     "townshipCode": "09 80  35",
                     "township": "ROMA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.5,
                     "sumOfPercentagesExclChurchFeePercentage": 34.04,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.44,
                     "churchFeePercentage": 1.46
                  },
                  {
                     "townshipCode": "09 80  57",
                     "township": "SANDA, VÄSTERGARN OCH MÄSTERBY",
                     "sumOfPercentagesInclChurchFeePercentage": 35.59,
                     "sumOfPercentagesExclChurchFeePercentage": 33.95,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.64
                  },
                  {
                     "townshipCode": "09 80  64",
                     "township": "SPROGE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.59,
                     "sumOfPercentagesExclChurchFeePercentage": 33.95,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.64
                  },
                  {
                     "townshipCode": "09 80  48",
                     "township": "STENKUMLA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.22,
                     "sumOfPercentagesExclChurchFeePercentage": 33.79,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.19,
                     "churchFeePercentage": 1.43
                  },
                  {
                     "townshipCode": "09 80  15",
                     "township": "STENKYRKA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.64,
                     "sumOfPercentagesExclChurchFeePercentage": 33.98,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.66
                  },
                  {
                     "townshipCode": "09 80  73",
                     "township": "STÅNGA-BURS",
                     "sumOfPercentagesInclChurchFeePercentage": 35.46,
                     "sumOfPercentagesExclChurchFeePercentage": 34,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.46
                  },
                  {
                     "townshipCode": "09 80  50",
                     "township": "VALL, HOGRÄN OCH ATLINGBO",
                     "sumOfPercentagesInclChurchFeePercentage": 35.21,
                     "sumOfPercentagesExclChurchFeePercentage": 33.93,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.28
                  },
                  {
                     "townshipCode": "09 80  01",
                     "township": "VISBY DOMKYRKOFÖRS.",
                     "sumOfPercentagesInclChurchFeePercentage": 35.28,
                     "sumOfPercentagesExclChurchFeePercentage": 33.87,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.41
                  },
                  {
                     "townshipCode": "09 80  40",
                     "township": "VÄNGE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.53,
                     "sumOfPercentagesExclChurchFeePercentage": 34,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.53
                  },
                  {
                     "townshipCode": "09 80  18",
                     "township": "VÄSKINDE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.64,
                     "sumOfPercentagesExclChurchFeePercentage": 33.98,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.66
                  },
                  {
                     "townshipCode": "09 80  59",
                     "township": "VÄTE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.59,
                     "sumOfPercentagesExclChurchFeePercentage": 33.95,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.64
                  },
                  {
                     "townshipCode": "09 80  47",
                     "township": "ÖSTERGARN",
                     "sumOfPercentagesInclChurchFeePercentage": 35.66,
                     "sumOfPercentagesExclChurchFeePercentage": 34,
                     "municipalityTaxPercentage": 33.6,
                     "countyTaxPercentage": 0,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.66
                  }
               ]
            },
            {
               "municipality": "GRUMS",
               "townships": [
                  {
                     "townshipCode": "17 64  03",
                     "township": "ED-BORGVIK",
                     "sumOfPercentagesInclChurchFeePercentage": 35.33,
                     "sumOfPercentagesExclChurchFeePercentage": 34.06,
                     "municipalityTaxPercentage": 22.5,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.27
                  },
                  {
                     "townshipCode": "17 64  01",
                     "township": "GRUMS",
                     "sumOfPercentagesInclChurchFeePercentage": 35.33,
                     "sumOfPercentagesExclChurchFeePercentage": 34.06,
                     "municipalityTaxPercentage": 22.5,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.27
                  },
                  {
                     "townshipCode": "17 64  04",
                     "township": "VÄRMSKOG",
                     "sumOfPercentagesInclChurchFeePercentage": 35.33,
                     "sumOfPercentagesExclChurchFeePercentage": 34.06,
                     "municipalityTaxPercentage": 22.5,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.27
                  }
               ]
            },
            {
               "municipality": "GRÄSTORP",
               "townships": [
                  {
                     "townshipCode": "14 44  08",
                     "township": "FLO",
                     "sumOfPercentagesInclChurchFeePercentage": 34.65,
                     "sumOfPercentagesExclChurchFeePercentage": 33.53,
                     "municipalityTaxPercentage": 21.57,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "14 44  12",
                     "township": "FRIDHEM, DEL",
                     "sumOfPercentagesInclChurchFeePercentage": 34.65,
                     "sumOfPercentagesExclChurchFeePercentage": 33.53,
                     "municipalityTaxPercentage": 21.57,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "14 44  03",
                     "township": "SÄRESTAD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.65,
                     "sumOfPercentagesExclChurchFeePercentage": 33.53,
                     "municipalityTaxPercentage": 21.57,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "14 44  09",
                     "township": "TENGENE",
                     "sumOfPercentagesInclChurchFeePercentage": 34.65,
                     "sumOfPercentagesExclChurchFeePercentage": 33.53,
                     "municipalityTaxPercentage": 21.57,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "14 44  10",
                     "township": "TRÖKÖRNA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.65,
                     "sumOfPercentagesExclChurchFeePercentage": 33.53,
                     "municipalityTaxPercentage": 21.57,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.12
                  }
               ]
            },
            {
               "municipality": "GULLSPÅNG",
               "townships": [
                  {
                     "townshipCode": "14 47  01",
                     "township": "AMNEHÄRAD",
                     "sumOfPercentagesInclChurchFeePercentage": 35.72,
                     "sumOfPercentagesExclChurchFeePercentage": 34.39,
                     "municipalityTaxPercentage": 22.49,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.42,
                     "churchFeePercentage": 1.33
                  },
                  {
                     "townshipCode": "14 47  02",
                     "township": "HOVA-ÄLGARÅS, DEL",
                     "sumOfPercentagesInclChurchFeePercentage": 35.72,
                     "sumOfPercentagesExclChurchFeePercentage": 34.45,
                     "municipalityTaxPercentage": 22.49,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.27
                  }
               ]
            },
            {
               "municipality": "GÄLLIVARE",
               "townships": [
                  {
                     "townshipCode": "25 23  01",
                     "township": "GÄLLIVARE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.83,
                     "sumOfPercentagesExclChurchFeePercentage": 33.01,
                     "municipalityTaxPercentage": 22.55,
                     "countyTaxPercentage": 10.18,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 0.82
                  },
                  {
                     "townshipCode": "25 23  06",
                     "township": "MALMBERGET",
                     "sumOfPercentagesInclChurchFeePercentage": 33.83,
                     "sumOfPercentagesExclChurchFeePercentage": 33.01,
                     "municipalityTaxPercentage": 22.55,
                     "countyTaxPercentage": 10.18,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 0.82
                  }
               ]
            },
            {
               "municipality": "GÄVLE",
               "townships": [
                  {
                     "townshipCode": "21 80  09",
                     "township": "BOMHUS",
                     "sumOfPercentagesInclChurchFeePercentage": 34.85,
                     "sumOfPercentagesExclChurchFeePercentage": 33.98,
                     "municipalityTaxPercentage": 22.26,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.21,
                     "churchFeePercentage": 0.87
                  },
                  {
                     "townshipCode": "21 80  01",
                     "township": "GÄVLE HELIGA TREFALDIGHET",
                     "sumOfPercentagesInclChurchFeePercentage": 34.85,
                     "sumOfPercentagesExclChurchFeePercentage": 33.98,
                     "municipalityTaxPercentage": 22.26,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.21,
                     "churchFeePercentage": 0.87
                  },
                  {
                     "townshipCode": "21 80  08",
                     "township": "GÄVLE MARIA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.85,
                     "sumOfPercentagesExclChurchFeePercentage": 33.98,
                     "municipalityTaxPercentage": 22.26,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.21,
                     "churchFeePercentage": 0.87
                  },
                  {
                     "townshipCode": "21 80  02",
                     "township": "GÄVLE STAFFAN",
                     "sumOfPercentagesInclChurchFeePercentage": 34.85,
                     "sumOfPercentagesExclChurchFeePercentage": 33.98,
                     "municipalityTaxPercentage": 22.26,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.21,
                     "churchFeePercentage": 0.87
                  },
                  {
                     "townshipCode": "21 80  03",
                     "township": "HAMRÅNGE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.31,
                     "sumOfPercentagesExclChurchFeePercentage": 34.15,
                     "municipalityTaxPercentage": 22.26,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.16
                  },
                  {
                     "townshipCode": "21 80  04",
                     "township": "HEDESUNDA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.21,
                     "sumOfPercentagesExclChurchFeePercentage": 33.98,
                     "municipalityTaxPercentage": 22.26,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.21,
                     "churchFeePercentage": 1.23
                  },
                  {
                     "townshipCode": "21 80  05",
                     "township": "HILLE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.06,
                     "sumOfPercentagesExclChurchFeePercentage": 33.97,
                     "municipalityTaxPercentage": 22.26,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 1.09
                  },
                  {
                     "townshipCode": "21 80  06",
                     "township": "VALBO",
                     "sumOfPercentagesInclChurchFeePercentage": 34.91,
                     "sumOfPercentagesExclChurchFeePercentage": 34.01,
                     "municipalityTaxPercentage": 22.26,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 0.9
                  }
               ]
            },
            {
               "municipality": "GÖTEBORG",
               "townships": [
                  {
                     "townshipCode": "14 80  34",
                     "township": "ANGERED",
                     "sumOfPercentagesInclChurchFeePercentage": 33.575,
                     "sumOfPercentagesExclChurchFeePercentage": 32.735,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.135,
                     "churchFeePercentage": 0.84
                  },
                  {
                     "townshipCode": "14 80  36",
                     "township": "ASKIM",
                     "sumOfPercentagesInclChurchFeePercentage": 33.575,
                     "sumOfPercentagesExclChurchFeePercentage": 32.735,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.135,
                     "churchFeePercentage": 0.84
                  },
                  {
                     "townshipCode": "14 80  20",
                     "township": "BACKA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.575,
                     "sumOfPercentagesExclChurchFeePercentage": 32.735,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.135,
                     "churchFeePercentage": 0.84
                  },
                  {
                     "townshipCode": "14 80  32",
                     "township": "BERGSJÖN",
                     "sumOfPercentagesInclChurchFeePercentage": 33.575,
                     "sumOfPercentagesExclChurchFeePercentage": 32.735,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.135,
                     "churchFeePercentage": 0.84
                  },
                  {
                     "townshipCode": "14 80  38",
                     "township": "BJÖRKEKÄRR",
                     "sumOfPercentagesInclChurchFeePercentage": 33.575,
                     "sumOfPercentagesExclChurchFeePercentage": 32.735,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.135,
                     "churchFeePercentage": 0.84
                  },
                  {
                     "townshipCode": "14 80  01",
                     "township": "DOMKYRKOFÖRS. I GÖTEBORG",
                     "sumOfPercentagesInclChurchFeePercentage": 33.575,
                     "sumOfPercentagesExclChurchFeePercentage": 32.735,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.135,
                     "churchFeePercentage": 0.84
                  },
                  {
                     "townshipCode": "14 80  09",
                     "township": "GÖTEBORGS ANNEDAL",
                     "sumOfPercentagesInclChurchFeePercentage": 33.575,
                     "sumOfPercentagesExclChurchFeePercentage": 32.735,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.135,
                     "churchFeePercentage": 0.84
                  },
                  {
                     "townshipCode": "14 80  13",
                     "township": "GÖTEBORGS CARL JOHAN",
                     "sumOfPercentagesInclChurchFeePercentage": 33.575,
                     "sumOfPercentagesExclChurchFeePercentage": 32.735,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.135,
                     "churchFeePercentage": 0.84
                  },
                  {
                     "townshipCode": "14 80  10",
                     "township": "GÖTEBORGS HAGA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.575,
                     "sumOfPercentagesExclChurchFeePercentage": 32.735,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.135,
                     "churchFeePercentage": 0.84
                  },
                  {
                     "townshipCode": "14 80  08",
                     "township": "GÖTEBORGS JOHANNEBERG",
                     "sumOfPercentagesInclChurchFeePercentage": 33.575,
                     "sumOfPercentagesExclChurchFeePercentage": 32.735,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.135,
                     "churchFeePercentage": 0.84
                  },
                  {
                     "townshipCode": "14 80  12",
                     "township": "GÖTEBORGS MASTHUGG",
                     "sumOfPercentagesInclChurchFeePercentage": 33.575,
                     "sumOfPercentagesExclChurchFeePercentage": 32.735,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.135,
                     "churchFeePercentage": 0.84
                  },
                  {
                     "townshipCode": "14 80  11",
                     "township": "GÖTEBORGS OSCAR FREDRIK",
                     "sumOfPercentagesInclChurchFeePercentage": 33.575,
                     "sumOfPercentagesExclChurchFeePercentage": 32.735,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.135,
                     "churchFeePercentage": 0.84
                  },
                  {
                     "townshipCode": "14 80  33",
                     "township": "GÖTEBORGS S:T PAULI",
                     "sumOfPercentagesInclChurchFeePercentage": 33.575,
                     "sumOfPercentagesExclChurchFeePercentage": 32.735,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.135,
                     "churchFeePercentage": 0.84
                  },
                  {
                     "townshipCode": "14 80  07",
                     "township": "GÖTEBORGS VASA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.575,
                     "sumOfPercentagesExclChurchFeePercentage": 32.735,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.135,
                     "churchFeePercentage": 0.84
                  },
                  {
                     "townshipCode": "14 80  06",
                     "township": "HÄRLANDA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.575,
                     "sumOfPercentagesExclChurchFeePercentage": 32.735,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.135,
                     "churchFeePercentage": 0.84
                  },
                  {
                     "townshipCode": "14 80  21",
                     "township": "HÖGSBO",
                     "sumOfPercentagesInclChurchFeePercentage": 33.575,
                     "sumOfPercentagesExclChurchFeePercentage": 32.735,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.135,
                     "churchFeePercentage": 0.84
                  },
                  {
                     "townshipCode": "14 80  05",
                     "township": "KORTEDALA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.575,
                     "sumOfPercentagesExclChurchFeePercentage": 32.735,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.135,
                     "churchFeePercentage": 0.84
                  },
                  {
                     "townshipCode": "14 80  17",
                     "township": "LUNDBY",
                     "sumOfPercentagesInclChurchFeePercentage": 33.575,
                     "sumOfPercentagesExclChurchFeePercentage": 32.735,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.135,
                     "churchFeePercentage": 0.84
                  },
                  {
                     "townshipCode": "14 80  04",
                     "township": "NYLÖSE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.575,
                     "sumOfPercentagesExclChurchFeePercentage": 32.735,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.135,
                     "churchFeePercentage": 0.84
                  },
                  {
                     "townshipCode": "14 80  41",
                     "township": "NÄSET",
                     "sumOfPercentagesInclChurchFeePercentage": 33.575,
                     "sumOfPercentagesExclChurchFeePercentage": 32.735,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.135,
                     "churchFeePercentage": 0.84
                  },
                  {
                     "townshipCode": "14 80  37",
                     "township": "STYRSÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 33.575,
                     "sumOfPercentagesExclChurchFeePercentage": 32.735,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.135,
                     "churchFeePercentage": 0.84
                  },
                  {
                     "townshipCode": "14 80  28",
                     "township": "TORSLANDA-BJÖRLANDA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.575,
                     "sumOfPercentagesExclChurchFeePercentage": 32.735,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.135,
                     "churchFeePercentage": 0.84
                  },
                  {
                     "townshipCode": "14 80  31",
                     "township": "TUVE-SÄVE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.575,
                     "sumOfPercentagesExclChurchFeePercentage": 32.735,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.135,
                     "churchFeePercentage": 0.84
                  },
                  {
                     "townshipCode": "14 80  24",
                     "township": "TYNNERED",
                     "sumOfPercentagesInclChurchFeePercentage": 33.575,
                     "sumOfPercentagesExclChurchFeePercentage": 32.735,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.135,
                     "churchFeePercentage": 0.84
                  },
                  {
                     "townshipCode": "14 80  22",
                     "township": "VÄSTRA FRÖLUNDA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.575,
                     "sumOfPercentagesExclChurchFeePercentage": 32.735,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.135,
                     "churchFeePercentage": 0.84
                  },
                  {
                     "townshipCode": "14 80  23",
                     "township": "ÄLVSBORG",
                     "sumOfPercentagesInclChurchFeePercentage": 33.575,
                     "sumOfPercentagesExclChurchFeePercentage": 32.735,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.135,
                     "churchFeePercentage": 0.84
                  },
                  {
                     "townshipCode": "14 80  16",
                     "township": "ÖRGRYTE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.575,
                     "sumOfPercentagesExclChurchFeePercentage": 32.735,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.135,
                     "churchFeePercentage": 0.84
                  }
               ]
            },
            {
               "municipality": "GÖTENE",
               "townships": [
                  {
                     "townshipCode": "14 71  02",
                     "township": "GÖTENE",
                     "sumOfPercentagesInclChurchFeePercentage": 34.96,
                     "sumOfPercentagesExclChurchFeePercentage": 33.7,
                     "municipalityTaxPercentage": 21.77,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.26
                  },
                  {
                     "townshipCode": "14 71  13",
                     "township": "HUSABY",
                     "sumOfPercentagesInclChurchFeePercentage": 34.96,
                     "sumOfPercentagesExclChurchFeePercentage": 33.7,
                     "municipalityTaxPercentage": 21.77,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.26
                  },
                  {
                     "townshipCode": "14 71  18",
                     "township": "KINNEKULLE",
                     "sumOfPercentagesInclChurchFeePercentage": 34.96,
                     "sumOfPercentagesExclChurchFeePercentage": 33.7,
                     "municipalityTaxPercentage": 21.77,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.26
                  },
                  {
                     "townshipCode": "14 71  01",
                     "township": "KLEVA-SIL",
                     "sumOfPercentagesInclChurchFeePercentage": 34.96,
                     "sumOfPercentagesExclChurchFeePercentage": 33.7,
                     "municipalityTaxPercentage": 21.77,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.26
                  },
                  {
                     "townshipCode": "14 71  12",
                     "township": "KÄLLBY",
                     "sumOfPercentagesInclChurchFeePercentage": 34.96,
                     "sumOfPercentagesExclChurchFeePercentage": 33.7,
                     "municipalityTaxPercentage": 21.77,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.26
                  },
                  {
                     "townshipCode": "14 71  09",
                     "township": "LEDSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.96,
                     "sumOfPercentagesExclChurchFeePercentage": 33.7,
                     "municipalityTaxPercentage": 21.77,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.26
                  }
               ]
            },
            {
               "municipality": "HABO",
               "townships": [
                  {
                     "townshipCode": "06 43  03",
                     "township": "BRANDSTORP",
                     "sumOfPercentagesInclChurchFeePercentage": 34.79,
                     "sumOfPercentagesExclChurchFeePercentage": 33.61,
                     "municipalityTaxPercentage": 22.17,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.18,
                     "churchFeePercentage": 1.18
                  },
                  {
                     "townshipCode": "06 43  02",
                     "township": "GUSTAV ADOLF",
                     "sumOfPercentagesInclChurchFeePercentage": 34.79,
                     "sumOfPercentagesExclChurchFeePercentage": 33.61,
                     "municipalityTaxPercentage": 22.17,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.18,
                     "churchFeePercentage": 1.18
                  },
                  {
                     "townshipCode": "06 43  01",
                     "township": "HABO",
                     "sumOfPercentagesInclChurchFeePercentage": 34.79,
                     "sumOfPercentagesExclChurchFeePercentage": 33.61,
                     "municipalityTaxPercentage": 22.17,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.18,
                     "churchFeePercentage": 1.18
                  }
               ]
            },
            {
               "municipality": "HAGFORS",
               "townships": [
                  {
                     "townshipCode": "17 83  02",
                     "township": "EKSHÄRAD",
                     "sumOfPercentagesInclChurchFeePercentage": 35.3,
                     "sumOfPercentagesExclChurchFeePercentage": 34.28,
                     "municipalityTaxPercentage": 22.5,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.58,
                     "churchFeePercentage": 1.02
                  },
                  {
                     "townshipCode": "17 83  01",
                     "township": "HAGFORS-GUSTAV ADOLF",
                     "sumOfPercentagesInclChurchFeePercentage": 35.28,
                     "sumOfPercentagesExclChurchFeePercentage": 34.15,
                     "municipalityTaxPercentage": 22.5,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.13
                  },
                  {
                     "townshipCode": "17 83  04",
                     "township": "NORRA RÅDA-SUNNEMO",
                     "sumOfPercentagesInclChurchFeePercentage": 35.4,
                     "sumOfPercentagesExclChurchFeePercentage": 34.22,
                     "municipalityTaxPercentage": 22.5,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.52,
                     "churchFeePercentage": 1.18
                  }
               ]
            },
            {
               "municipality": "HALLSBERG",
               "townships": [
                  {
                     "townshipCode": "18 61  01",
                     "township": "HALLSBERG",
                     "sumOfPercentagesInclChurchFeePercentage": 33.73,
                     "sumOfPercentagesExclChurchFeePercentage": 32.82,
                     "municipalityTaxPercentage": 21.05,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 0.91
                  },
                  {
                     "townshipCode": "18 61  04",
                     "township": "SKÖLLERSTA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.34,
                     "sumOfPercentagesExclChurchFeePercentage": 33.1,
                     "municipalityTaxPercentage": 21.05,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.5,
                     "churchFeePercentage": 1.24
                  },
                  {
                     "townshipCode": "18 61  02",
                     "township": "VIBY",
                     "sumOfPercentagesInclChurchFeePercentage": 34.12,
                     "sumOfPercentagesExclChurchFeePercentage": 32.98,
                     "municipalityTaxPercentage": 21.05,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.14
                  }
               ]
            },
            {
               "municipality": "HALLSTAHAMMAR",
               "townships": [
                  {
                     "townshipCode": "19 61  01",
                     "township": "HALLSTAHAMMAR-KOLBÄCK",
                     "sumOfPercentagesInclChurchFeePercentage": 33.96,
                     "sumOfPercentagesExclChurchFeePercentage": 32.94,
                     "municipalityTaxPercentage": 21.81,
                     "countyTaxPercentage": 10.88,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.02
                  }
               ]
            },
            {
               "municipality": "HALMSTAD",
               "townships": [
                  {
                     "townshipCode": "13 80  19",
                     "township": "ENSLÖV",
                     "sumOfPercentagesInclChurchFeePercentage": 32.58,
                     "sumOfPercentagesExclChurchFeePercentage": 31.51,
                     "municipalityTaxPercentage": 20.43,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.26,
                     "churchFeePercentage": 1.07
                  },
                  {
                     "townshipCode": "13 80  14",
                     "township": "GETINGE-RÄVINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 32.58,
                     "sumOfPercentagesExclChurchFeePercentage": 31.51,
                     "municipalityTaxPercentage": 20.43,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.26,
                     "churchFeePercentage": 1.07
                  },
                  {
                     "townshipCode": "13 80  11",
                     "township": "HARPLINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 32.51,
                     "sumOfPercentagesExclChurchFeePercentage": 31.42,
                     "municipalityTaxPercentage": 20.43,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.17,
                     "churchFeePercentage": 1.09
                  },
                  {
                     "townshipCode": "13 80  02",
                     "township": "MARTIN LUTHER",
                     "sumOfPercentagesInclChurchFeePercentage": 32.59,
                     "sumOfPercentagesExclChurchFeePercentage": 31.5,
                     "municipalityTaxPercentage": 20.43,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.09
                  },
                  {
                     "townshipCode": "13 80  05",
                     "township": "OSKARSTRÖM",
                     "sumOfPercentagesInclChurchFeePercentage": 32.58,
                     "sumOfPercentagesExclChurchFeePercentage": 31.51,
                     "municipalityTaxPercentage": 20.43,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.26,
                     "churchFeePercentage": 1.07
                  },
                  {
                     "townshipCode": "13 80  01",
                     "township": "S:T NIKOLAI",
                     "sumOfPercentagesInclChurchFeePercentage": 32.59,
                     "sumOfPercentagesExclChurchFeePercentage": 31.5,
                     "municipalityTaxPercentage": 20.43,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.09
                  },
                  {
                     "townshipCode": "13 80  15",
                     "township": "SLÄTTÅKRA-KVIBILLE",
                     "sumOfPercentagesInclChurchFeePercentage": 32.58,
                     "sumOfPercentagesExclChurchFeePercentage": 31.51,
                     "municipalityTaxPercentage": 20.43,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.26,
                     "churchFeePercentage": 1.07
                  },
                  {
                     "townshipCode": "13 80  03",
                     "township": "SNÖSTORP",
                     "sumOfPercentagesInclChurchFeePercentage": 32.63,
                     "sumOfPercentagesExclChurchFeePercentage": 31.44,
                     "municipalityTaxPercentage": 20.43,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.19,
                     "churchFeePercentage": 1.19
                  },
                  {
                     "townshipCode": "13 80  12",
                     "township": "STENINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 32.51,
                     "sumOfPercentagesExclChurchFeePercentage": 31.42,
                     "municipalityTaxPercentage": 20.43,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.17,
                     "churchFeePercentage": 1.09
                  },
                  {
                     "townshipCode": "13 80  09",
                     "township": "SÖNDRUM-VAPNÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 32.23,
                     "sumOfPercentagesExclChurchFeePercentage": 31.4,
                     "municipalityTaxPercentage": 20.43,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.15,
                     "churchFeePercentage": 0.83
                  }
               ]
            },
            {
               "municipality": "HAMMARÖ",
               "townships": [
                  {
                     "townshipCode": "17 61  01",
                     "township": "HAMMARÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.33,
                     "sumOfPercentagesExclChurchFeePercentage": 33.53,
                     "municipalityTaxPercentage": 22.1,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 0.8
                  }
               ]
            },
            {
               "municipality": "HANINGE",
               "townships": [
                  {
                     "townshipCode": "01 36  05",
                     "township": "DALARÖ-ORNÖ-UTÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 32.99,
                     "sumOfPercentagesExclChurchFeePercentage": 32.12,
                     "municipalityTaxPercentage": 19.78,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 0.87
                  },
                  {
                     "townshipCode": "01 36  06",
                     "township": "VÄSTERHANINGE-MUSKÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 32.81,
                     "sumOfPercentagesExclChurchFeePercentage": 32.03,
                     "municipalityTaxPercentage": 19.78,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.15,
                     "churchFeePercentage": 0.78
                  },
                  {
                     "townshipCode": "01 36  01",
                     "township": "ÖSTERHANINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 32.87,
                     "sumOfPercentagesExclChurchFeePercentage": 32.02,
                     "municipalityTaxPercentage": 19.78,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.14,
                     "churchFeePercentage": 0.85
                  }
               ]
            },
            {
               "municipality": "HAPARANDA",
               "townships": [
                  {
                     "townshipCode": "25 83  01",
                     "township": "HAPARANDA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.98,
                     "sumOfPercentagesExclChurchFeePercentage": 33.05,
                     "municipalityTaxPercentage": 22.5,
                     "countyTaxPercentage": 10.18,
                     "funeralFeePercentage": 0.37,
                     "churchFeePercentage": 0.93
                  }
               ]
            },
            {
               "municipality": "HEBY",
               "townships": [
                  {
                     "townshipCode": "03 31  03",
                     "township": "ENÅKER",
                     "sumOfPercentagesInclChurchFeePercentage": 35.22,
                     "sumOfPercentagesExclChurchFeePercentage": 34.04,
                     "municipalityTaxPercentage": 22.5,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.18
                  },
                  {
                     "townshipCode": "03 31  07",
                     "township": "HARBO",
                     "sumOfPercentagesInclChurchFeePercentage": 35.3,
                     "sumOfPercentagesExclChurchFeePercentage": 34.06,
                     "municipalityTaxPercentage": 22.5,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.24
                  },
                  {
                     "townshipCode": "03 31  02",
                     "township": "HUDDUNGE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.22,
                     "sumOfPercentagesExclChurchFeePercentage": 34.04,
                     "municipalityTaxPercentage": 22.5,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.18
                  },
                  {
                     "townshipCode": "03 31  05",
                     "township": "NORA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.29,
                     "sumOfPercentagesExclChurchFeePercentage": 34.05,
                     "municipalityTaxPercentage": 22.5,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.39,
                     "churchFeePercentage": 1.24
                  },
                  {
                     "townshipCode": "03 31  04",
                     "township": "VITTINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.22,
                     "sumOfPercentagesExclChurchFeePercentage": 33.98,
                     "municipalityTaxPercentage": 22.5,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.24
                  },
                  {
                     "townshipCode": "03 31  01",
                     "township": "VÄSTERLÖVSTA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.22,
                     "sumOfPercentagesExclChurchFeePercentage": 34.04,
                     "municipalityTaxPercentage": 22.5,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.18
                  },
                  {
                     "townshipCode": "03 31  06",
                     "township": "ÖSTERVÅLA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.3,
                     "sumOfPercentagesExclChurchFeePercentage": 34.06,
                     "municipalityTaxPercentage": 22.5,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.24
                  }
               ]
            },
            {
               "municipality": "HEDEMORA",
               "townships": [
                  {
                     "townshipCode": "20 83  01",
                     "township": "HEDEMORA-GARPENBERG",
                     "sumOfPercentagesInclChurchFeePercentage": 35.47,
                     "sumOfPercentagesExclChurchFeePercentage": 34.14,
                     "municipalityTaxPercentage": 22.64,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.34,
                     "churchFeePercentage": 1.33
                  },
                  {
                     "townshipCode": "20 83  03",
                     "township": "HUSBY",
                     "sumOfPercentagesInclChurchFeePercentage": 35.58,
                     "sumOfPercentagesExclChurchFeePercentage": 34.28,
                     "municipalityTaxPercentage": 22.64,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.3
                  }
               ]
            },
            {
               "municipality": "HELSINGBORG",
               "townships": [
                  {
                     "townshipCode": "12 83  06",
                     "township": "ALLERUM",
                     "sumOfPercentagesInclChurchFeePercentage": 32.11,
                     "sumOfPercentagesExclChurchFeePercentage": 31.105,
                     "municipalityTaxPercentage": 20.21,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.205,
                     "churchFeePercentage": 1.005
                  },
                  {
                     "townshipCode": "12 83  17",
                     "township": "FILBORNA",
                     "sumOfPercentagesInclChurchFeePercentage": 32.18,
                     "sumOfPercentagesExclChurchFeePercentage": 31.15,
                     "municipalityTaxPercentage": 20.21,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.03
                  },
                  {
                     "townshipCode": "12 83  07",
                     "township": "FLENINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 32.11,
                     "sumOfPercentagesExclChurchFeePercentage": 31.105,
                     "municipalityTaxPercentage": 20.21,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.205,
                     "churchFeePercentage": 1.005
                  },
                  {
                     "townshipCode": "12 83  02",
                     "township": "HELSINGBORGS GUSTAV ADOLF",
                     "sumOfPercentagesInclChurchFeePercentage": 32.18,
                     "sumOfPercentagesExclChurchFeePercentage": 31.15,
                     "municipalityTaxPercentage": 20.21,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.03
                  },
                  {
                     "townshipCode": "12 83  01",
                     "township": "HELSINGBORGS MARIA",
                     "sumOfPercentagesInclChurchFeePercentage": 32.18,
                     "sumOfPercentagesExclChurchFeePercentage": 31.15,
                     "municipalityTaxPercentage": 20.21,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.03
                  },
                  {
                     "townshipCode": "12 83  09",
                     "township": "KROPP",
                     "sumOfPercentagesInclChurchFeePercentage": 32.5,
                     "sumOfPercentagesExclChurchFeePercentage": 31.15,
                     "municipalityTaxPercentage": 20.21,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.35
                  },
                  {
                     "townshipCode": "12 83  16",
                     "township": "KVISTOFTA, DEL",
                     "sumOfPercentagesInclChurchFeePercentage": 32.18,
                     "sumOfPercentagesExclChurchFeePercentage": 31.15,
                     "municipalityTaxPercentage": 20.21,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.03
                  },
                  {
                     "townshipCode": "12 83  14",
                     "township": "LANDSKRONA, DEL",
                     "sumOfPercentagesInclChurchFeePercentage": 32.28,
                     "sumOfPercentagesExclChurchFeePercentage": 31.32,
                     "municipalityTaxPercentage": 20.21,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.42,
                     "churchFeePercentage": 0.96
                  },
                  {
                     "townshipCode": "12 83  03",
                     "township": "RAUS",
                     "sumOfPercentagesInclChurchFeePercentage": 32.18,
                     "sumOfPercentagesExclChurchFeePercentage": 31.15,
                     "municipalityTaxPercentage": 20.21,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.03
                  },
                  {
                     "townshipCode": "12 83  05",
                     "township": "VÄLINGE-KATTARP",
                     "sumOfPercentagesInclChurchFeePercentage": 32.11,
                     "sumOfPercentagesExclChurchFeePercentage": 31.105,
                     "municipalityTaxPercentage": 20.21,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.205,
                     "churchFeePercentage": 1.005
                  }
               ]
            },
            {
               "municipality": "HERRLJUNGA",
               "townships": [
                  {
                     "townshipCode": "14 66  06",
                     "township": "HERRLJUNGA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.188,
                     "sumOfPercentagesExclChurchFeePercentage": 33.82,
                     "municipalityTaxPercentage": 21.94,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.368
                  },
                  {
                     "townshipCode": "14 66  02",
                     "township": "HERRLJUNGA LANDSBYGDSFÖRS.",
                     "sumOfPercentagesInclChurchFeePercentage": 35.188,
                     "sumOfPercentagesExclChurchFeePercentage": 33.82,
                     "municipalityTaxPercentage": 21.94,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.368
                  },
                  {
                     "townshipCode": "14 66  18",
                     "township": "HOV",
                     "sumOfPercentagesInclChurchFeePercentage": 35.188,
                     "sumOfPercentagesExclChurchFeePercentage": 33.82,
                     "municipalityTaxPercentage": 21.94,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.368
                  },
                  {
                     "townshipCode": "14 66  07",
                     "township": "HUDENE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.188,
                     "sumOfPercentagesExclChurchFeePercentage": 33.82,
                     "municipalityTaxPercentage": 21.94,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.368
                  },
                  {
                     "townshipCode": "14 66  17",
                     "township": "ÖSTRA GÄSENE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.188,
                     "sumOfPercentagesExclChurchFeePercentage": 33.82,
                     "municipalityTaxPercentage": 21.94,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.368
                  }
               ]
            },
            {
               "municipality": "HJO",
               "townships": [
                  {
                     "townshipCode": "14 97  06",
                     "township": "FÅGELÅS",
                     "sumOfPercentagesInclChurchFeePercentage": 34.43,
                     "sumOfPercentagesExclChurchFeePercentage": 33.43,
                     "municipalityTaxPercentage": 21.57,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1
                  },
                  {
                     "townshipCode": "14 97  01",
                     "township": "HJO",
                     "sumOfPercentagesInclChurchFeePercentage": 34.43,
                     "sumOfPercentagesExclChurchFeePercentage": 33.43,
                     "municipalityTaxPercentage": 21.57,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1
                  },
                  {
                     "townshipCode": "14 97  08",
                     "township": "KORSBERGA-FRIDENE",
                     "sumOfPercentagesInclChurchFeePercentage": 34.43,
                     "sumOfPercentagesExclChurchFeePercentage": 33.43,
                     "municipalityTaxPercentage": 21.57,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1
                  },
                  {
                     "townshipCode": "14 97  04",
                     "township": "MOFALLA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.43,
                     "sumOfPercentagesExclChurchFeePercentage": 33.43,
                     "municipalityTaxPercentage": 21.57,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1
                  }
               ]
            },
            {
               "municipality": "HOFORS",
               "townships": [
                  {
                     "townshipCode": "21 04  01",
                     "township": "HOFORS",
                     "sumOfPercentagesInclChurchFeePercentage": 35.89,
                     "sumOfPercentagesExclChurchFeePercentage": 34.74,
                     "municipalityTaxPercentage": 22.86,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.37,
                     "churchFeePercentage": 1.15
                  },
                  {
                     "townshipCode": "21 04  02",
                     "township": "TORSÅKER",
                     "sumOfPercentagesInclChurchFeePercentage": 36.06,
                     "sumOfPercentagesExclChurchFeePercentage": 34.73,
                     "municipalityTaxPercentage": 22.86,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.33
                  }
               ]
            },
            {
               "municipality": "HUDDINGE",
               "townships": [
                  {
                     "townshipCode": "01 26  04",
                     "township": "FLEMINGSBERG",
                     "sumOfPercentagesInclChurchFeePercentage": 32.8,
                     "sumOfPercentagesExclChurchFeePercentage": 32.08,
                     "municipalityTaxPercentage": 19.85,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.13,
                     "churchFeePercentage": 0.72
                  },
                  {
                     "townshipCode": "01 26  01",
                     "township": "HUDDINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 32.8,
                     "sumOfPercentagesExclChurchFeePercentage": 32.08,
                     "municipalityTaxPercentage": 19.85,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.13,
                     "churchFeePercentage": 0.72
                  },
                  {
                     "townshipCode": "01 26  03",
                     "township": "S:T MIKAEL",
                     "sumOfPercentagesInclChurchFeePercentage": 32.8,
                     "sumOfPercentagesExclChurchFeePercentage": 32.08,
                     "municipalityTaxPercentage": 19.85,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.13,
                     "churchFeePercentage": 0.72
                  },
                  {
                     "townshipCode": "01 26  02",
                     "township": "TRÅNGSUND",
                     "sumOfPercentagesInclChurchFeePercentage": 32.8,
                     "sumOfPercentagesExclChurchFeePercentage": 32.08,
                     "municipalityTaxPercentage": 19.85,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.13,
                     "churchFeePercentage": 0.72
                  }
               ]
            },
            {
               "municipality": "HUDIKSVALL",
               "townships": [
                  {
                     "townshipCode": "21 84  09",
                     "township": "BJURÅKER-NORRBO",
                     "sumOfPercentagesInclChurchFeePercentage": 34.76,
                     "sumOfPercentagesExclChurchFeePercentage": 33.57,
                     "municipalityTaxPercentage": 21.61,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.19
                  },
                  {
                     "townshipCode": "21 84  08",
                     "township": "DELSBO",
                     "sumOfPercentagesInclChurchFeePercentage": 34.61,
                     "sumOfPercentagesExclChurchFeePercentage": 33.47,
                     "municipalityTaxPercentage": 21.61,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.14
                  },
                  {
                     "townshipCode": "21 84  05",
                     "township": "ENÅNGER-NJUTÅNGER",
                     "sumOfPercentagesInclChurchFeePercentage": 34.56,
                     "sumOfPercentagesExclChurchFeePercentage": 33.44,
                     "municipalityTaxPercentage": 21.61,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "21 84  11",
                     "township": "FORSA-HÖG",
                     "sumOfPercentagesInclChurchFeePercentage": 34.44,
                     "sumOfPercentagesExclChurchFeePercentage": 33.41,
                     "municipalityTaxPercentage": 21.61,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.03
                  },
                  {
                     "townshipCode": "21 84  01",
                     "township": "HUDIKSVALLSBYGDEN",
                     "sumOfPercentagesInclChurchFeePercentage": 34.353,
                     "sumOfPercentagesExclChurchFeePercentage": 33.42,
                     "municipalityTaxPercentage": 21.61,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 0.933
                  }
               ]
            },
            {
               "municipality": "HULTSFRED",
               "townships": [
                  {
                     "townshipCode": "08 60  01",
                     "township": "HULTSFRED",
                     "sumOfPercentagesInclChurchFeePercentage": 34.88,
                     "sumOfPercentagesExclChurchFeePercentage": 33.62,
                     "municipalityTaxPercentage": 21.91,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.34,
                     "churchFeePercentage": 1.26
                  },
                  {
                     "townshipCode": "08 60  04",
                     "township": "JÄREDA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.88,
                     "sumOfPercentagesExclChurchFeePercentage": 33.62,
                     "municipalityTaxPercentage": 21.91,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.34,
                     "churchFeePercentage": 1.26
                  },
                  {
                     "townshipCode": "08 60  02",
                     "township": "LÖNNEBERGA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.88,
                     "sumOfPercentagesExclChurchFeePercentage": 33.62,
                     "municipalityTaxPercentage": 21.91,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.34,
                     "churchFeePercentage": 1.26
                  },
                  {
                     "townshipCode": "08 60  03",
                     "township": "MÅLILLA MED GÅRDVEDA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.88,
                     "sumOfPercentagesExclChurchFeePercentage": 33.62,
                     "municipalityTaxPercentage": 21.91,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.34,
                     "churchFeePercentage": 1.26
                  },
                  {
                     "townshipCode": "08 60  08",
                     "township": "MÖRLUNDA-TVETA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.88,
                     "sumOfPercentagesExclChurchFeePercentage": 33.62,
                     "municipalityTaxPercentage": 21.91,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.34,
                     "churchFeePercentage": 1.26
                  },
                  {
                     "townshipCode": "08 60  06",
                     "township": "VENA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.88,
                     "sumOfPercentagesExclChurchFeePercentage": 33.62,
                     "municipalityTaxPercentage": 21.91,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.34,
                     "churchFeePercentage": 1.26
                  },
                  {
                     "townshipCode": "08 60  05",
                     "township": "VIRSERUM",
                     "sumOfPercentagesInclChurchFeePercentage": 34.88,
                     "sumOfPercentagesExclChurchFeePercentage": 33.62,
                     "municipalityTaxPercentage": 21.91,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.34,
                     "churchFeePercentage": 1.26
                  }
               ]
            },
            {
               "municipality": "HYLTE",
               "townships": [
                  {
                     "townshipCode": "13 15  06",
                     "township": "FEMSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.07,
                     "sumOfPercentagesExclChurchFeePercentage": 32.57,
                     "municipalityTaxPercentage": 21.45,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.5
                  },
                  {
                     "townshipCode": "13 15  05",
                     "township": "FÄRGARYD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.07,
                     "sumOfPercentagesExclChurchFeePercentage": 32.57,
                     "municipalityTaxPercentage": 21.45,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.5
                  },
                  {
                     "townshipCode": "13 15  04",
                     "township": "LÅNGARYD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.07,
                     "sumOfPercentagesExclChurchFeePercentage": 32.57,
                     "municipalityTaxPercentage": 21.45,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.5
                  },
                  {
                     "townshipCode": "13 15  01",
                     "township": "TORUP",
                     "sumOfPercentagesInclChurchFeePercentage": 34.07,
                     "sumOfPercentagesExclChurchFeePercentage": 32.54,
                     "municipalityTaxPercentage": 21.45,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.53
                  },
                  {
                     "townshipCode": "13 15  07",
                     "township": "UNNARYD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.07,
                     "sumOfPercentagesExclChurchFeePercentage": 32.57,
                     "municipalityTaxPercentage": 21.45,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.5
                  }
               ]
            },
            {
               "municipality": "HÄLLEFORS",
               "townships": [
                  {
                     "townshipCode": "18 63  02",
                     "township": "GRYTHYTTAN",
                     "sumOfPercentagesInclChurchFeePercentage": 35.28,
                     "sumOfPercentagesExclChurchFeePercentage": 34.05,
                     "municipalityTaxPercentage": 22.05,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.23
                  },
                  {
                     "townshipCode": "18 63  01",
                     "township": "HÄLLEFORS-HJULSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.27,
                     "sumOfPercentagesExclChurchFeePercentage": 33.95,
                     "municipalityTaxPercentage": 22.05,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.32
                  }
               ]
            },
            {
               "municipality": "HÄRJEDALEN",
               "townships": [
                  {
                     "townshipCode": "23 61  05",
                     "township": "HEDEBYGDEN, DEL",
                     "sumOfPercentagesInclChurchFeePercentage": 35.62,
                     "sumOfPercentagesExclChurchFeePercentage": 34.21,
                     "municipalityTaxPercentage": 22.47,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.54,
                     "churchFeePercentage": 1.41
                  },
                  {
                     "townshipCode": "23 61  01",
                     "township": "SVEGSBYGDEN",
                     "sumOfPercentagesInclChurchFeePercentage": 35.62,
                     "sumOfPercentagesExclChurchFeePercentage": 34.21,
                     "municipalityTaxPercentage": 22.47,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.54,
                     "churchFeePercentage": 1.41
                  },
                  {
                     "townshipCode": "23 61  07",
                     "township": "TÄNNÄS-LJUSNEDAL",
                     "sumOfPercentagesInclChurchFeePercentage": 36.07,
                     "sumOfPercentagesExclChurchFeePercentage": 34.32,
                     "municipalityTaxPercentage": 22.47,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.65,
                     "churchFeePercentage": 1.75
                  },
                  {
                     "townshipCode": "23 61  09",
                     "township": "YTTERHOGDAL, ÖVERHOGDAL OCH ÄNGERSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.67,
                     "sumOfPercentagesExclChurchFeePercentage": 34.23,
                     "municipalityTaxPercentage": 22.47,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.56,
                     "churchFeePercentage": 1.44
                  }
               ]
            },
            {
               "municipality": "HÄRNÖSAND",
               "townships": [
                  {
                     "townshipCode": "22 80  07",
                     "township": "HEMSÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.78,
                     "sumOfPercentagesExclChurchFeePercentage": 34.31,
                     "municipalityTaxPercentage": 23.34,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.47
                  },
                  {
                     "townshipCode": "22 80  03",
                     "township": "HÄGGDÅNGER",
                     "sumOfPercentagesInclChurchFeePercentage": 35.78,
                     "sumOfPercentagesExclChurchFeePercentage": 34.31,
                     "municipalityTaxPercentage": 23.34,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.47
                  },
                  {
                     "townshipCode": "22 80  01",
                     "township": "HÄRNÖSANDS DOMKYRKOFÖRS.",
                     "sumOfPercentagesInclChurchFeePercentage": 35.58,
                     "sumOfPercentagesExclChurchFeePercentage": 34.33,
                     "municipalityTaxPercentage": 23.34,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "22 80  02",
                     "township": "HÖGSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.78,
                     "sumOfPercentagesExclChurchFeePercentage": 34.31,
                     "municipalityTaxPercentage": 23.34,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.47
                  },
                  {
                     "townshipCode": "22 80  04",
                     "township": "STIGSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.78,
                     "sumOfPercentagesExclChurchFeePercentage": 34.31,
                     "municipalityTaxPercentage": 23.34,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.47
                  },
                  {
                     "townshipCode": "22 80  06",
                     "township": "SÄBRÅ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.78,
                     "sumOfPercentagesExclChurchFeePercentage": 34.31,
                     "municipalityTaxPercentage": 23.34,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.47
                  },
                  {
                     "townshipCode": "22 80  05",
                     "township": "VIKSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.78,
                     "sumOfPercentagesExclChurchFeePercentage": 34.31,
                     "municipalityTaxPercentage": 23.34,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.47
                  }
               ]
            },
            {
               "municipality": "HÄRRYDA",
               "townships": [
                  {
                     "townshipCode": "14 01  04",
                     "township": "BJÖRKETORP",
                     "sumOfPercentagesInclChurchFeePercentage": 33.42,
                     "sumOfPercentagesExclChurchFeePercentage": 32.3,
                     "municipalityTaxPercentage": 20.62,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "14 01  01",
                     "township": "HÄRRYDA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.26,
                     "sumOfPercentagesExclChurchFeePercentage": 32.28,
                     "municipalityTaxPercentage": 20.62,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.18,
                     "churchFeePercentage": 0.98
                  },
                  {
                     "townshipCode": "14 01  02",
                     "township": "LANDVETTER",
                     "sumOfPercentagesInclChurchFeePercentage": 33.26,
                     "sumOfPercentagesExclChurchFeePercentage": 32.28,
                     "municipalityTaxPercentage": 20.62,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.18,
                     "churchFeePercentage": 0.98
                  },
                  {
                     "townshipCode": "14 01  03",
                     "township": "RÅDA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.13,
                     "sumOfPercentagesExclChurchFeePercentage": 32.23,
                     "municipalityTaxPercentage": 20.62,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.13,
                     "churchFeePercentage": 0.9
                  }
               ]
            },
            {
               "municipality": "HÄSSLEHOLM",
               "townships": [
                  {
                     "townshipCode": "12 93  10",
                     "township": "FARSTORP",
                     "sumOfPercentagesInclChurchFeePercentage": 33.16,
                     "sumOfPercentagesExclChurchFeePercentage": 32.05,
                     "municipalityTaxPercentage": 21.06,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.11
                  },
                  {
                     "townshipCode": "12 93  01",
                     "township": "HÄSSLEHOLM",
                     "sumOfPercentagesInclChurchFeePercentage": 32.97,
                     "sumOfPercentagesExclChurchFeePercentage": 32.06,
                     "municipalityTaxPercentage": 21.06,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 0.91
                  },
                  {
                     "townshipCode": "12 93  13",
                     "township": "NORRA ÅKARP",
                     "sumOfPercentagesInclChurchFeePercentage": 33.16,
                     "sumOfPercentagesExclChurchFeePercentage": 32.05,
                     "municipalityTaxPercentage": 21.06,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.11
                  },
                  {
                     "townshipCode": "12 93  21",
                     "township": "RÖKE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.28,
                     "sumOfPercentagesExclChurchFeePercentage": 32,
                     "municipalityTaxPercentage": 21.06,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.28
                  },
                  {
                     "townshipCode": "12 93  15",
                     "township": "SÖSDALA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.28,
                     "sumOfPercentagesExclChurchFeePercentage": 32.06,
                     "municipalityTaxPercentage": 21.06,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 1.22
                  },
                  {
                     "townshipCode": "12 93  19",
                     "township": "TYRINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.28,
                     "sumOfPercentagesExclChurchFeePercentage": 32,
                     "municipalityTaxPercentage": 21.06,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.28
                  },
                  {
                     "townshipCode": "12 93  14",
                     "township": "VANKIVA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.16,
                     "sumOfPercentagesExclChurchFeePercentage": 32.05,
                     "municipalityTaxPercentage": 21.06,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.11
                  },
                  {
                     "townshipCode": "12 93  11",
                     "township": "VERUM",
                     "sumOfPercentagesInclChurchFeePercentage": 33.25,
                     "sumOfPercentagesExclChurchFeePercentage": 32.1,
                     "municipalityTaxPercentage": 21.06,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.15
                  },
                  {
                     "townshipCode": "12 93  05",
                     "township": "VINSLÖV",
                     "sumOfPercentagesInclChurchFeePercentage": 33.27,
                     "sumOfPercentagesExclChurchFeePercentage": 32.03,
                     "municipalityTaxPercentage": 21.06,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.24
                  },
                  {
                     "townshipCode": "12 93  12",
                     "township": "VITTSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 33.25,
                     "sumOfPercentagesExclChurchFeePercentage": 32.1,
                     "municipalityTaxPercentage": 21.06,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.15
                  },
                  {
                     "townshipCode": "12 93  22",
                     "township": "VÄSTRA TORUP",
                     "sumOfPercentagesInclChurchFeePercentage": 33.28,
                     "sumOfPercentagesExclChurchFeePercentage": 32,
                     "municipalityTaxPercentage": 21.06,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.28
                  }
               ]
            },
            {
               "municipality": "HÅBO",
               "townships": [
                  {
                     "townshipCode": "03 05  04",
                     "township": "HÄGGEBY",
                     "sumOfPercentagesInclChurchFeePercentage": 33.74,
                     "sumOfPercentagesExclChurchFeePercentage": 32.62,
                     "municipalityTaxPercentage": 21.34,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.12,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "03 05  01",
                     "township": "KALMAR-YTTERGRAN",
                     "sumOfPercentagesInclChurchFeePercentage": 33.74,
                     "sumOfPercentagesExclChurchFeePercentage": 32.62,
                     "municipalityTaxPercentage": 21.34,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.12,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "03 05  05",
                     "township": "SKOKLOSTER",
                     "sumOfPercentagesInclChurchFeePercentage": 33.74,
                     "sumOfPercentagesExclChurchFeePercentage": 32.62,
                     "municipalityTaxPercentage": 21.34,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.12,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "03 05  03",
                     "township": "ÖVERGRAN",
                     "sumOfPercentagesInclChurchFeePercentage": 33.74,
                     "sumOfPercentagesExclChurchFeePercentage": 32.62,
                     "municipalityTaxPercentage": 21.34,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.12,
                     "churchFeePercentage": 1.12
                  }
               ]
            },
            {
               "municipality": "HÖGANÄS",
               "townships": [
                  {
                     "townshipCode": "12 84  04",
                     "township": "BRUNNBY",
                     "sumOfPercentagesInclChurchFeePercentage": 31.85,
                     "sumOfPercentagesExclChurchFeePercentage": 30.62,
                     "municipalityTaxPercentage": 19.73,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 1.23
                  },
                  {
                     "townshipCode": "12 84  05",
                     "township": "FARHULT-JONSTORP",
                     "sumOfPercentagesInclChurchFeePercentage": 31.62,
                     "sumOfPercentagesExclChurchFeePercentage": 30.6,
                     "municipalityTaxPercentage": 19.73,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.18,
                     "churchFeePercentage": 1.02
                  },
                  {
                     "townshipCode": "12 84  01",
                     "township": "HÖGANÄS",
                     "sumOfPercentagesInclChurchFeePercentage": 31.6,
                     "sumOfPercentagesExclChurchFeePercentage": 30.69,
                     "municipalityTaxPercentage": 19.73,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 0.91
                  },
                  {
                     "townshipCode": "12 84  03",
                     "township": "VIKEN",
                     "sumOfPercentagesInclChurchFeePercentage": 31.62,
                     "sumOfPercentagesExclChurchFeePercentage": 30.6,
                     "municipalityTaxPercentage": 19.73,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.18,
                     "churchFeePercentage": 1.02
                  },
                  {
                     "townshipCode": "12 84  02",
                     "township": "VÄSBY",
                     "sumOfPercentagesInclChurchFeePercentage": 31.62,
                     "sumOfPercentagesExclChurchFeePercentage": 30.6,
                     "municipalityTaxPercentage": 19.73,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.18,
                     "churchFeePercentage": 1.02
                  }
               ]
            },
            {
               "municipality": "HÖGSBY",
               "townships": [
                  {
                     "townshipCode": "08 21  04",
                     "township": "FAGERHULT",
                     "sumOfPercentagesInclChurchFeePercentage": 34.69,
                     "sumOfPercentagesExclChurchFeePercentage": 33.47,
                     "municipalityTaxPercentage": 21.71,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.39,
                     "churchFeePercentage": 1.22
                  },
                  {
                     "townshipCode": "08 21  01",
                     "township": "FÅGELFORS",
                     "sumOfPercentagesInclChurchFeePercentage": 34.69,
                     "sumOfPercentagesExclChurchFeePercentage": 33.47,
                     "municipalityTaxPercentage": 21.71,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.39,
                     "churchFeePercentage": 1.22
                  },
                  {
                     "townshipCode": "08 21  02",
                     "township": "HÖGSBY",
                     "sumOfPercentagesInclChurchFeePercentage": 34.69,
                     "sumOfPercentagesExclChurchFeePercentage": 33.47,
                     "municipalityTaxPercentage": 21.71,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.39,
                     "churchFeePercentage": 1.22
                  },
                  {
                     "townshipCode": "08 21  03",
                     "township": "LÅNGEMÅLA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.69,
                     "sumOfPercentagesExclChurchFeePercentage": 33.47,
                     "municipalityTaxPercentage": 21.71,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.39,
                     "churchFeePercentage": 1.22
                  }
               ]
            },
            {
               "municipality": "HÖRBY",
               "townships": [
                  {
                     "townshipCode": "12 66  02",
                     "township": "HÖRBY",
                     "sumOfPercentagesInclChurchFeePercentage": 32.7,
                     "sumOfPercentagesExclChurchFeePercentage": 31.57,
                     "municipalityTaxPercentage": 20.48,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.13
                  }
               ]
            },
            {
               "municipality": "HÖÖR",
               "townships": [
                  {
                     "townshipCode": "12 67  02",
                     "township": "HÖÖR",
                     "sumOfPercentagesInclChurchFeePercentage": 33.1,
                     "sumOfPercentagesExclChurchFeePercentage": 31.97,
                     "municipalityTaxPercentage": 20.93,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.13
                  },
                  {
                     "townshipCode": "12 67  04",
                     "township": "RINGSJÖ, DEL",
                     "sumOfPercentagesInclChurchFeePercentage": 33.13,
                     "sumOfPercentagesExclChurchFeePercentage": 31.95,
                     "municipalityTaxPercentage": 20.93,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.18
                  }
               ]
            },
            {
               "municipality": "JOKKMOKK",
               "townships": [
                  {
                     "townshipCode": "25 10  02",
                     "township": "JOKKMOKK",
                     "sumOfPercentagesInclChurchFeePercentage": 34.83,
                     "sumOfPercentagesExclChurchFeePercentage": 33.53,
                     "municipalityTaxPercentage": 22.95,
                     "countyTaxPercentage": 10.18,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.3
                  }
               ]
            },
            {
               "municipality": "JÄRFÄLLA",
               "townships": [
                  {
                     "townshipCode": "01 23  04",
                     "township": "JÄRFÄLLA",
                     "sumOfPercentagesInclChurchFeePercentage": 31.94,
                     "sumOfPercentagesExclChurchFeePercentage": 31.25,
                     "municipalityTaxPercentage": 18.98,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.17,
                     "churchFeePercentage": 0.69
                  }
               ]
            },
            {
               "municipality": "JÖNKÖPING",
               "townships": [
                  {
                     "townshipCode": "06 80  20",
                     "township": "BANKERYD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.1,
                     "sumOfPercentagesExclChurchFeePercentage": 32.77,
                     "municipalityTaxPercentage": 21.34,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.17,
                     "churchFeePercentage": 1.33
                  },
                  {
                     "townshipCode": "06 80  16",
                     "township": "BARNARP",
                     "sumOfPercentagesInclChurchFeePercentage": 34.1,
                     "sumOfPercentagesExclChurchFeePercentage": 32.8,
                     "municipalityTaxPercentage": 21.34,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 1.3
                  },
                  {
                     "townshipCode": "06 80  07",
                     "township": "GRÄNNA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.38,
                     "sumOfPercentagesExclChurchFeePercentage": 32.95,
                     "municipalityTaxPercentage": 21.34,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.43
                  },
                  {
                     "townshipCode": "06 80  06",
                     "township": "HAKARP",
                     "sumOfPercentagesInclChurchFeePercentage": 33.93,
                     "sumOfPercentagesExclChurchFeePercentage": 32.87,
                     "municipalityTaxPercentage": 21.34,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.06
                  },
                  {
                     "townshipCode": "06 80  05",
                     "township": "HUSKVARNA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.93,
                     "sumOfPercentagesExclChurchFeePercentage": 32.87,
                     "municipalityTaxPercentage": 21.34,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.06
                  },
                  {
                     "townshipCode": "06 80  02",
                     "township": "JÖNKÖPINGS KRISTINA-LJUNGARUM",
                     "sumOfPercentagesInclChurchFeePercentage": 33.87,
                     "sumOfPercentagesExclChurchFeePercentage": 32.86,
                     "municipalityTaxPercentage": 21.34,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.26,
                     "churchFeePercentage": 1.01
                  },
                  {
                     "townshipCode": "06 80  01",
                     "township": "JÖNKÖPINGS SOFIA-JÄRSTORP",
                     "sumOfPercentagesInclChurchFeePercentage": 33.87,
                     "sumOfPercentagesExclChurchFeePercentage": 32.86,
                     "municipalityTaxPercentage": 21.34,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.26,
                     "churchFeePercentage": 1.01
                  },
                  {
                     "townshipCode": "06 80  14",
                     "township": "LEKERYD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.4,
                     "sumOfPercentagesExclChurchFeePercentage": 32.9,
                     "municipalityTaxPercentage": 21.34,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.5
                  },
                  {
                     "townshipCode": "06 80  19",
                     "township": "MÅNSARP",
                     "sumOfPercentagesInclChurchFeePercentage": 33.95,
                     "sumOfPercentagesExclChurchFeePercentage": 32.77,
                     "municipalityTaxPercentage": 21.34,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.17,
                     "churchFeePercentage": 1.18
                  },
                  {
                     "townshipCode": "06 80  21",
                     "township": "NORRA MO",
                     "sumOfPercentagesInclChurchFeePercentage": 34.14,
                     "sumOfPercentagesExclChurchFeePercentage": 32.98,
                     "municipalityTaxPercentage": 21.34,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.16
                  },
                  {
                     "townshipCode": "06 80  08",
                     "township": "NORRAHAMMAR",
                     "sumOfPercentagesInclChurchFeePercentage": 33.91,
                     "sumOfPercentagesExclChurchFeePercentage": 32.71,
                     "municipalityTaxPercentage": 21.34,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.11,
                     "churchFeePercentage": 1.2
                  },
                  {
                     "townshipCode": "06 80  15",
                     "township": "ROGBERGA-ÖGGESTORP",
                     "sumOfPercentagesInclChurchFeePercentage": 34.24,
                     "sumOfPercentagesExclChurchFeePercentage": 32.88,
                     "municipalityTaxPercentage": 21.34,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.36
                  },
                  {
                     "townshipCode": "06 80  10",
                     "township": "SKÄRSTAD-ÖLMSTAD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.15,
                     "sumOfPercentagesExclChurchFeePercentage": 32.87,
                     "municipalityTaxPercentage": 21.34,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.28
                  },
                  {
                     "townshipCode": "06 80  09",
                     "township": "VISINGSÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.38,
                     "sumOfPercentagesExclChurchFeePercentage": 32.95,
                     "municipalityTaxPercentage": 21.34,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.43
                  },
                  {
                     "townshipCode": "06 80  17",
                     "township": "ÖDESTUGU",
                     "sumOfPercentagesInclChurchFeePercentage": 34.1,
                     "sumOfPercentagesExclChurchFeePercentage": 32.8,
                     "municipalityTaxPercentage": 21.34,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 1.3
                  }
               ]
            },
            {
               "municipality": "KALIX",
               "townships": [
                  {
                     "townshipCode": "25 14  01",
                     "township": "NEDERKALIX",
                     "sumOfPercentagesInclChurchFeePercentage": 33.901,
                     "sumOfPercentagesExclChurchFeePercentage": 33.001,
                     "municipalityTaxPercentage": 22.55,
                     "countyTaxPercentage": 10.18,
                     "funeralFeePercentage": 0.271,
                     "churchFeePercentage": 0.9
                  },
                  {
                     "townshipCode": "25 14  02",
                     "township": "TÖRE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.901,
                     "sumOfPercentagesExclChurchFeePercentage": 33.001,
                     "municipalityTaxPercentage": 22.55,
                     "countyTaxPercentage": 10.18,
                     "funeralFeePercentage": 0.271,
                     "churchFeePercentage": 0.9
                  }
               ]
            },
            {
               "municipality": "KALMAR",
               "townships": [
                  {
                     "townshipCode": "08 80  09",
                     "township": "ARBY-HAGBY",
                     "sumOfPercentagesInclChurchFeePercentage": 34.87,
                     "sumOfPercentagesExclChurchFeePercentage": 33.51,
                     "municipalityTaxPercentage": 21.81,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.36
                  },
                  {
                     "townshipCode": "08 80  03",
                     "township": "DÖRBY",
                     "sumOfPercentagesInclChurchFeePercentage": 34.59,
                     "sumOfPercentagesExclChurchFeePercentage": 33.42,
                     "municipalityTaxPercentage": 21.81,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1.17
                  },
                  {
                     "townshipCode": "08 80  02",
                     "township": "FÖRLÖSA-KLÄCKEBERGA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.22,
                     "sumOfPercentagesExclChurchFeePercentage": 33.37,
                     "municipalityTaxPercentage": 21.81,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.19,
                     "churchFeePercentage": 0.85
                  },
                  {
                     "townshipCode": "08 80  11",
                     "township": "HALLTORP-VOXTORP",
                     "sumOfPercentagesInclChurchFeePercentage": 34.87,
                     "sumOfPercentagesExclChurchFeePercentage": 33.51,
                     "municipalityTaxPercentage": 21.81,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.36
                  },
                  {
                     "townshipCode": "08 80  16",
                     "township": "HELIGA KORSET",
                     "sumOfPercentagesInclChurchFeePercentage": 34.58,
                     "sumOfPercentagesExclChurchFeePercentage": 33.45,
                     "municipalityTaxPercentage": 21.81,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.13
                  },
                  {
                     "townshipCode": "08 80  04",
                     "township": "HOSSMO",
                     "sumOfPercentagesInclChurchFeePercentage": 34.59,
                     "sumOfPercentagesExclChurchFeePercentage": 33.42,
                     "municipalityTaxPercentage": 21.81,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1.17
                  },
                  {
                     "townshipCode": "08 80  01",
                     "township": "KALMAR DOMKYRKOFÖRS.",
                     "sumOfPercentagesInclChurchFeePercentage": 34.58,
                     "sumOfPercentagesExclChurchFeePercentage": 33.45,
                     "municipalityTaxPercentage": 21.81,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.13
                  },
                  {
                     "townshipCode": "08 80  15",
                     "township": "KALMAR S:T JOHANNES",
                     "sumOfPercentagesInclChurchFeePercentage": 34.58,
                     "sumOfPercentagesExclChurchFeePercentage": 33.45,
                     "municipalityTaxPercentage": 21.81,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.13
                  },
                  {
                     "townshipCode": "08 80  13",
                     "township": "KARLSLUNDA-MORTORP",
                     "sumOfPercentagesInclChurchFeePercentage": 34.87,
                     "sumOfPercentagesExclChurchFeePercentage": 33.51,
                     "municipalityTaxPercentage": 21.81,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.36
                  },
                  {
                     "townshipCode": "08 80  08",
                     "township": "LJUNGBY",
                     "sumOfPercentagesInclChurchFeePercentage": 34.87,
                     "sumOfPercentagesExclChurchFeePercentage": 33.51,
                     "municipalityTaxPercentage": 21.81,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.36
                  },
                  {
                     "townshipCode": "08 80  05",
                     "township": "RYSSBY",
                     "sumOfPercentagesInclChurchFeePercentage": 34.58,
                     "sumOfPercentagesExclChurchFeePercentage": 33.43,
                     "municipalityTaxPercentage": 21.81,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.15
                  },
                  {
                     "townshipCode": "08 80  17",
                     "township": "S:TA BIRGITTA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.58,
                     "sumOfPercentagesExclChurchFeePercentage": 33.45,
                     "municipalityTaxPercentage": 21.81,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.13
                  },
                  {
                     "townshipCode": "08 80  18",
                     "township": "TVÅ SYSTRAR",
                     "sumOfPercentagesInclChurchFeePercentage": 34.58,
                     "sumOfPercentagesExclChurchFeePercentage": 33.45,
                     "municipalityTaxPercentage": 21.81,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.13
                  },
                  {
                     "townshipCode": "08 80  06",
                     "township": "ÅBY",
                     "sumOfPercentagesInclChurchFeePercentage": 34.58,
                     "sumOfPercentagesExclChurchFeePercentage": 33.43,
                     "municipalityTaxPercentage": 21.81,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.15
                  }
               ]
            },
            {
               "municipality": "KARLSBORG",
               "townships": [
                  {
                     "townshipCode": "14 46  02",
                     "township": "BREVIK",
                     "sumOfPercentagesInclChurchFeePercentage": 34.42,
                     "sumOfPercentagesExclChurchFeePercentage": 33.21,
                     "municipalityTaxPercentage": 21.32,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.41,
                     "churchFeePercentage": 1.21
                  },
                  {
                     "townshipCode": "14 46  01",
                     "township": "KARLSBORG",
                     "sumOfPercentagesInclChurchFeePercentage": 34.42,
                     "sumOfPercentagesExclChurchFeePercentage": 33.21,
                     "municipalityTaxPercentage": 21.32,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.41,
                     "churchFeePercentage": 1.21
                  },
                  {
                     "townshipCode": "14 46  03",
                     "township": "MÖLLTORP",
                     "sumOfPercentagesInclChurchFeePercentage": 34.42,
                     "sumOfPercentagesExclChurchFeePercentage": 33.21,
                     "municipalityTaxPercentage": 21.32,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.41,
                     "churchFeePercentage": 1.21
                  },
                  {
                     "townshipCode": "14 46  04",
                     "township": "UNDENÄS",
                     "sumOfPercentagesInclChurchFeePercentage": 34.42,
                     "sumOfPercentagesExclChurchFeePercentage": 33.21,
                     "municipalityTaxPercentage": 21.32,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.41,
                     "churchFeePercentage": 1.21
                  }
               ]
            },
            {
               "municipality": "KARLSHAMN",
               "townships": [
                  {
                     "townshipCode": "10 82  05",
                     "township": "ASARUM",
                     "sumOfPercentagesInclChurchFeePercentage": 34.66,
                     "sumOfPercentagesExclChurchFeePercentage": 33.64,
                     "municipalityTaxPercentage": 22.21,
                     "countyTaxPercentage": 11.19,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1.02
                  },
                  {
                     "townshipCode": "10 82  03",
                     "township": "HÄLLARYD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.72,
                     "sumOfPercentagesExclChurchFeePercentage": 33.76,
                     "municipalityTaxPercentage": 22.21,
                     "countyTaxPercentage": 11.19,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 0.96
                  },
                  {
                     "townshipCode": "10 82  01",
                     "township": "KARLSHAMN",
                     "sumOfPercentagesInclChurchFeePercentage": 34.72,
                     "sumOfPercentagesExclChurchFeePercentage": 33.76,
                     "municipalityTaxPercentage": 22.21,
                     "countyTaxPercentage": 11.19,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 0.96
                  },
                  {
                     "townshipCode": "10 82  06",
                     "township": "MÖRRUM-ELLEHOLM",
                     "sumOfPercentagesInclChurchFeePercentage": 34.83,
                     "sumOfPercentagesExclChurchFeePercentage": 33.7,
                     "municipalityTaxPercentage": 22.21,
                     "countyTaxPercentage": 11.19,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.13
                  },
                  {
                     "townshipCode": "10 82  02",
                     "township": "RINGAMÅLA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.66,
                     "sumOfPercentagesExclChurchFeePercentage": 33.64,
                     "municipalityTaxPercentage": 22.21,
                     "countyTaxPercentage": 11.19,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1.02
                  },
                  {
                     "townshipCode": "10 82  04",
                     "township": "ÅRYD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.72,
                     "sumOfPercentagesExclChurchFeePercentage": 33.76,
                     "municipalityTaxPercentage": 22.21,
                     "countyTaxPercentage": 11.19,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 0.96
                  }
               ]
            },
            {
               "municipality": "KARLSKOGA",
               "townships": [
                  {
                     "townshipCode": "18 83  01",
                     "township": "KARLSKOGA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.61,
                     "sumOfPercentagesExclChurchFeePercentage": 33.81,
                     "municipalityTaxPercentage": 22,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.26,
                     "churchFeePercentage": 0.8
                  }
               ]
            },
            {
               "municipality": "KARLSKRONA",
               "townships": [
                  {
                     "townshipCode": "10 80  04",
                     "township": "ASPÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.65,
                     "sumOfPercentagesExclChurchFeePercentage": 33.65,
                     "municipalityTaxPercentage": 22.1,
                     "countyTaxPercentage": 11.19,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1
                  },
                  {
                     "townshipCode": "10 80  15",
                     "township": "FRIDLEVSTAD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.79,
                     "sumOfPercentagesExclChurchFeePercentage": 33.68,
                     "municipalityTaxPercentage": 22.1,
                     "countyTaxPercentage": 11.19,
                     "funeralFeePercentage": 0.39,
                     "churchFeePercentage": 1.11
                  },
                  {
                     "townshipCode": "10 80  09",
                     "township": "JÄMJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.65,
                     "sumOfPercentagesExclChurchFeePercentage": 33.57,
                     "municipalityTaxPercentage": 22.1,
                     "countyTaxPercentage": 11.19,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.08
                  },
                  {
                     "townshipCode": "10 80  01",
                     "township": "KARLSKRONA STADSFÖRS.",
                     "sumOfPercentagesInclChurchFeePercentage": 34.65,
                     "sumOfPercentagesExclChurchFeePercentage": 33.65,
                     "municipalityTaxPercentage": 22.1,
                     "countyTaxPercentage": 11.19,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1
                  },
                  {
                     "townshipCode": "10 80  08",
                     "township": "KRISTIANOPEL",
                     "sumOfPercentagesInclChurchFeePercentage": 34.65,
                     "sumOfPercentagesExclChurchFeePercentage": 33.57,
                     "municipalityTaxPercentage": 22.1,
                     "countyTaxPercentage": 11.19,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.08
                  },
                  {
                     "townshipCode": "10 80  06",
                     "township": "LYCKÅ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.45,
                     "sumOfPercentagesExclChurchFeePercentage": 33.51,
                     "municipalityTaxPercentage": 22.1,
                     "countyTaxPercentage": 11.19,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 0.94
                  },
                  {
                     "townshipCode": "10 80  18",
                     "township": "NÄTTRABY-HASSLÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.55,
                     "sumOfPercentagesExclChurchFeePercentage": 33.59,
                     "municipalityTaxPercentage": 22.1,
                     "countyTaxPercentage": 11.19,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 0.96
                  },
                  {
                     "townshipCode": "10 80  12",
                     "township": "RAMDALA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.65,
                     "sumOfPercentagesExclChurchFeePercentage": 33.57,
                     "municipalityTaxPercentage": 22.1,
                     "countyTaxPercentage": 11.19,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.08
                  },
                  {
                     "townshipCode": "10 80  14",
                     "township": "RÖDEBY",
                     "sumOfPercentagesInclChurchFeePercentage": 34.65,
                     "sumOfPercentagesExclChurchFeePercentage": 33.53,
                     "municipalityTaxPercentage": 22.1,
                     "countyTaxPercentage": 11.19,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "10 80  11",
                     "township": "STURKÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.65,
                     "sumOfPercentagesExclChurchFeePercentage": 33.57,
                     "municipalityTaxPercentage": 22.1,
                     "countyTaxPercentage": 11.19,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.08
                  },
                  {
                     "townshipCode": "10 80  10",
                     "township": "TORHAMN",
                     "sumOfPercentagesInclChurchFeePercentage": 34.65,
                     "sumOfPercentagesExclChurchFeePercentage": 33.57,
                     "municipalityTaxPercentage": 22.1,
                     "countyTaxPercentage": 11.19,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.08
                  }
               ]
            },
            {
               "municipality": "KARLSTAD",
               "townships": [
                  {
                     "townshipCode": "17 80  06",
                     "township": "ALSTER-NYEDSBYGDEN",
                     "sumOfPercentagesInclChurchFeePercentage": 34.16,
                     "sumOfPercentagesExclChurchFeePercentage": 33.17,
                     "municipalityTaxPercentage": 21.75,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 0.99
                  },
                  {
                     "townshipCode": "17 80  08",
                     "township": "GRAVA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.03,
                     "sumOfPercentagesExclChurchFeePercentage": 33.14,
                     "municipalityTaxPercentage": 21.75,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.19,
                     "churchFeePercentage": 0.89
                  },
                  {
                     "townshipCode": "17 80  01",
                     "township": "KARLSTADS DOMKYRKOFÖRS.",
                     "sumOfPercentagesInclChurchFeePercentage": 34.16,
                     "sumOfPercentagesExclChurchFeePercentage": 33.17,
                     "municipalityTaxPercentage": 21.75,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 0.99
                  },
                  {
                     "townshipCode": "17 80  09",
                     "township": "NOR-SEGERSTAD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.25,
                     "sumOfPercentagesExclChurchFeePercentage": 33.24,
                     "municipalityTaxPercentage": 21.75,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.01
                  },
                  {
                     "townshipCode": "17 80  02",
                     "township": "NORRSTRAND",
                     "sumOfPercentagesInclChurchFeePercentage": 34.16,
                     "sumOfPercentagesExclChurchFeePercentage": 33.17,
                     "municipalityTaxPercentage": 21.75,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 0.99
                  },
                  {
                     "townshipCode": "17 80  03",
                     "township": "VÄSE-FÅGELVIK",
                     "sumOfPercentagesInclChurchFeePercentage": 34.16,
                     "sumOfPercentagesExclChurchFeePercentage": 33.17,
                     "municipalityTaxPercentage": 21.75,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 0.99
                  },
                  {
                     "townshipCode": "17 80  11",
                     "township": "VÄSTERSTRAND",
                     "sumOfPercentagesInclChurchFeePercentage": 34.16,
                     "sumOfPercentagesExclChurchFeePercentage": 33.17,
                     "municipalityTaxPercentage": 21.75,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 0.99
                  }
               ]
            },
            {
               "municipality": "KATRINEHOLM",
               "townships": [
                  {
                     "townshipCode": "04 83  02",
                     "township": "BJÖRKVIK",
                     "sumOfPercentagesInclChurchFeePercentage": 34.79,
                     "sumOfPercentagesExclChurchFeePercentage": 33.48,
                     "municipalityTaxPercentage": 22.18,
                     "countyTaxPercentage": 10.77,
                     "funeralFeePercentage": 0.53,
                     "churchFeePercentage": 1.31
                  },
                  {
                     "townshipCode": "04 83  01",
                     "township": "KATRINEHOLMSBYGDEN",
                     "sumOfPercentagesInclChurchFeePercentage": 34.29,
                     "sumOfPercentagesExclChurchFeePercentage": 33.24,
                     "municipalityTaxPercentage": 22.18,
                     "countyTaxPercentage": 10.77,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.05
                  }
               ]
            },
            {
               "municipality": "KIL",
               "townships": [
                  {
                     "townshipCode": "17 15  03",
                     "township": "BODA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.99,
                     "sumOfPercentagesExclChurchFeePercentage": 33.9,
                     "municipalityTaxPercentage": 22.35,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.09
                  },
                  {
                     "townshipCode": "17 15  02",
                     "township": "FRYKERUD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.99,
                     "sumOfPercentagesExclChurchFeePercentage": 33.9,
                     "municipalityTaxPercentage": 22.35,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.09
                  },
                  {
                     "townshipCode": "17 15  01",
                     "township": "STORA KIL",
                     "sumOfPercentagesInclChurchFeePercentage": 34.99,
                     "sumOfPercentagesExclChurchFeePercentage": 33.9,
                     "municipalityTaxPercentage": 22.35,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.09
                  }
               ]
            },
            {
               "municipality": "KINDA",
               "townships": [
                  {
                     "townshipCode": "05 13  04",
                     "township": "HORN",
                     "sumOfPercentagesInclChurchFeePercentage": 33.435,
                     "sumOfPercentagesExclChurchFeePercentage": 32.145,
                     "municipalityTaxPercentage": 20.95,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.495,
                     "churchFeePercentage": 1.29
                  },
                  {
                     "townshipCode": "05 13  05",
                     "township": "HYCKLINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.435,
                     "sumOfPercentagesExclChurchFeePercentage": 32.145,
                     "municipalityTaxPercentage": 20.95,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.495,
                     "churchFeePercentage": 1.29
                  },
                  {
                     "townshipCode": "05 13  02",
                     "township": "KISA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.435,
                     "sumOfPercentagesExclChurchFeePercentage": 32.145,
                     "municipalityTaxPercentage": 20.95,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.495,
                     "churchFeePercentage": 1.29
                  },
                  {
                     "townshipCode": "05 13  09",
                     "township": "RIMFORSA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.48,
                     "sumOfPercentagesExclChurchFeePercentage": 32.03,
                     "municipalityTaxPercentage": 20.95,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.45
                  },
                  {
                     "townshipCode": "05 13  01",
                     "township": "TIDERSRUM",
                     "sumOfPercentagesInclChurchFeePercentage": 33.435,
                     "sumOfPercentagesExclChurchFeePercentage": 32.145,
                     "municipalityTaxPercentage": 20.95,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.495,
                     "churchFeePercentage": 1.29
                  },
                  {
                     "townshipCode": "05 13  03",
                     "township": "VÄSTRA ENEBY",
                     "sumOfPercentagesInclChurchFeePercentage": 33.435,
                     "sumOfPercentagesExclChurchFeePercentage": 32.145,
                     "municipalityTaxPercentage": 20.95,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.495,
                     "churchFeePercentage": 1.29
                  }
               ]
            },
            {
               "municipality": "KIRUNA",
               "townships": [
                  {
                     "townshipCode": "25 84  01",
                     "township": "JUKKASJÄRVI",
                     "sumOfPercentagesInclChurchFeePercentage": 34.43,
                     "sumOfPercentagesExclChurchFeePercentage": 33.485,
                     "municipalityTaxPercentage": 23.05,
                     "countyTaxPercentage": 10.18,
                     "funeralFeePercentage": 0.255,
                     "churchFeePercentage": 0.945
                  },
                  {
                     "townshipCode": "25 84  03",
                     "township": "KARESUANDO",
                     "sumOfPercentagesInclChurchFeePercentage": 34.43,
                     "sumOfPercentagesExclChurchFeePercentage": 33.485,
                     "municipalityTaxPercentage": 23.05,
                     "countyTaxPercentage": 10.18,
                     "funeralFeePercentage": 0.255,
                     "churchFeePercentage": 0.945
                  },
                  {
                     "townshipCode": "25 84  02",
                     "township": "VITTANGI",
                     "sumOfPercentagesInclChurchFeePercentage": 34.43,
                     "sumOfPercentagesExclChurchFeePercentage": 33.485,
                     "municipalityTaxPercentage": 23.05,
                     "countyTaxPercentage": 10.18,
                     "funeralFeePercentage": 0.255,
                     "churchFeePercentage": 0.945
                  }
               ]
            },
            {
               "municipality": "KLIPPAN",
               "townships": [
                  {
                     "townshipCode": "12 76  01",
                     "township": "KLIPPAN",
                     "sumOfPercentagesInclChurchFeePercentage": 32.84,
                     "sumOfPercentagesExclChurchFeePercentage": 31.69,
                     "municipalityTaxPercentage": 20.75,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.15
                  },
                  {
                     "townshipCode": "12 76  05",
                     "township": "RISEBERGA-FÄRINGTOFTA",
                     "sumOfPercentagesInclChurchFeePercentage": 32.84,
                     "sumOfPercentagesExclChurchFeePercentage": 31.69,
                     "municipalityTaxPercentage": 20.75,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.15
                  },
                  {
                     "townshipCode": "12 76  07",
                     "township": "ÖSTRA LJUNGBY",
                     "sumOfPercentagesInclChurchFeePercentage": 32.84,
                     "sumOfPercentagesExclChurchFeePercentage": 31.69,
                     "municipalityTaxPercentage": 20.75,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.15
                  }
               ]
            },
            {
               "municipality": "KNIVSTA",
               "townships": [
                  {
                     "townshipCode": "03 30  05",
                     "township": "ALSIKE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.35,
                     "sumOfPercentagesExclChurchFeePercentage": 32.32,
                     "municipalityTaxPercentage": 20.91,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.03
                  },
                  {
                     "townshipCode": "03 30  03",
                     "township": "HUSBY-LÅNGHUNDRA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.35,
                     "sumOfPercentagesExclChurchFeePercentage": 32.32,
                     "municipalityTaxPercentage": 20.91,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.03
                  },
                  {
                     "townshipCode": "03 30  01",
                     "township": "KNIVSTA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.35,
                     "sumOfPercentagesExclChurchFeePercentage": 32.32,
                     "municipalityTaxPercentage": 20.91,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.03
                  },
                  {
                     "townshipCode": "03 30  04",
                     "township": "LAGGA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.35,
                     "sumOfPercentagesExclChurchFeePercentage": 32.32,
                     "municipalityTaxPercentage": 20.91,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.03
                  },
                  {
                     "townshipCode": "03 30  06",
                     "township": "VASSUNDA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.35,
                     "sumOfPercentagesExclChurchFeePercentage": 32.32,
                     "municipalityTaxPercentage": 20.91,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.03
                  },
                  {
                     "townshipCode": "03 30  02",
                     "township": "ÖSTUNA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.35,
                     "sumOfPercentagesExclChurchFeePercentage": 32.32,
                     "municipalityTaxPercentage": 20.91,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.03
                  }
               ]
            },
            {
               "municipality": "KRAMFORS",
               "townships": [
                  {
                     "townshipCode": "22 82  07",
                     "township": "BJÄRTRÅ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.68,
                     "sumOfPercentagesExclChurchFeePercentage": 34.31,
                     "municipalityTaxPercentage": 23.14,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.37
                  },
                  {
                     "townshipCode": "22 82  09",
                     "township": "DAL",
                     "sumOfPercentagesInclChurchFeePercentage": 35.68,
                     "sumOfPercentagesExclChurchFeePercentage": 34.31,
                     "municipalityTaxPercentage": 23.14,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.37
                  },
                  {
                     "townshipCode": "22 82  01",
                     "township": "GUDMUNDRÅ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.36,
                     "sumOfPercentagesExclChurchFeePercentage": 34.21,
                     "municipalityTaxPercentage": 23.14,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.15
                  },
                  {
                     "townshipCode": "22 82  02",
                     "township": "NORA-SKOG",
                     "sumOfPercentagesInclChurchFeePercentage": 35.68,
                     "sumOfPercentagesExclChurchFeePercentage": 34.22,
                     "municipalityTaxPercentage": 23.14,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.39,
                     "churchFeePercentage": 1.46
                  },
                  {
                     "townshipCode": "22 82  04",
                     "township": "NORDINGRÅ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.51,
                     "sumOfPercentagesExclChurchFeePercentage": 34.14,
                     "municipalityTaxPercentage": 23.14,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 1.37
                  },
                  {
                     "townshipCode": "22 82  08",
                     "township": "STYRNÄS",
                     "sumOfPercentagesInclChurchFeePercentage": 35.68,
                     "sumOfPercentagesExclChurchFeePercentage": 34.31,
                     "municipalityTaxPercentage": 23.14,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.37
                  },
                  {
                     "townshipCode": "22 82  10",
                     "township": "TORSÅKER",
                     "sumOfPercentagesInclChurchFeePercentage": 35.68,
                     "sumOfPercentagesExclChurchFeePercentage": 34.31,
                     "municipalityTaxPercentage": 23.14,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.37
                  },
                  {
                     "townshipCode": "22 82  06",
                     "township": "ULLÅNGER",
                     "sumOfPercentagesInclChurchFeePercentage": 35.68,
                     "sumOfPercentagesExclChurchFeePercentage": 34.16,
                     "municipalityTaxPercentage": 23.14,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.52
                  },
                  {
                     "townshipCode": "22 82  05",
                     "township": "VIBYGGERÅ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.68,
                     "sumOfPercentagesExclChurchFeePercentage": 34.16,
                     "municipalityTaxPercentage": 23.14,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.52
                  },
                  {
                     "townshipCode": "22 82  11",
                     "township": "YTTERLÄNNÄS",
                     "sumOfPercentagesInclChurchFeePercentage": 35.68,
                     "sumOfPercentagesExclChurchFeePercentage": 34.31,
                     "municipalityTaxPercentage": 23.14,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.37
                  }
               ]
            },
            {
               "municipality": "KRISTIANSTAD",
               "townships": [
                  {
                     "townshipCode": "12 90  14",
                     "township": "ARASLÖV",
                     "sumOfPercentagesInclChurchFeePercentage": 33.46,
                     "sumOfPercentagesExclChurchFeePercentage": 32.36,
                     "municipalityTaxPercentage": 21.46,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.21,
                     "churchFeePercentage": 1.1
                  },
                  {
                     "townshipCode": "12 90  23",
                     "township": "BÄCKASKOG",
                     "sumOfPercentagesInclChurchFeePercentage": 33.9,
                     "sumOfPercentagesExclChurchFeePercentage": 32.49,
                     "municipalityTaxPercentage": 21.46,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.34,
                     "churchFeePercentage": 1.41
                  },
                  {
                     "townshipCode": "12 90  29",
                     "township": "DEGEBERGA-EVERÖD",
                     "sumOfPercentagesInclChurchFeePercentage": 33.78,
                     "sumOfPercentagesExclChurchFeePercentage": 32.53,
                     "municipalityTaxPercentage": 21.46,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "12 90  24",
                     "township": "FJÄLKINGE-NYMÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 33.9,
                     "sumOfPercentagesExclChurchFeePercentage": 32.49,
                     "municipalityTaxPercentage": 21.46,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.34,
                     "churchFeePercentage": 1.41
                  },
                  {
                     "townshipCode": "12 90  25",
                     "township": "GUSTAV ADOLF-RINKABY",
                     "sumOfPercentagesInclChurchFeePercentage": 33.9,
                     "sumOfPercentagesExclChurchFeePercentage": 32.49,
                     "municipalityTaxPercentage": 21.46,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.34,
                     "churchFeePercentage": 1.41
                  },
                  {
                     "townshipCode": "12 90  01",
                     "township": "KRISTIANSTADS HELIGA TREFALDIGHET",
                     "sumOfPercentagesInclChurchFeePercentage": 33.32,
                     "sumOfPercentagesExclChurchFeePercentage": 32.4,
                     "municipalityTaxPercentage": 21.46,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 0.92
                  },
                  {
                     "townshipCode": "12 90  08",
                     "township": "KÖPINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.6,
                     "sumOfPercentagesExclChurchFeePercentage": 32.42,
                     "municipalityTaxPercentage": 21.46,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.18
                  },
                  {
                     "townshipCode": "12 90  33",
                     "township": "LINDERÖD",
                     "sumOfPercentagesInclChurchFeePercentage": 33.68,
                     "sumOfPercentagesExclChurchFeePercentage": 32.45,
                     "municipalityTaxPercentage": 21.46,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.23
                  },
                  {
                     "townshipCode": "12 90  02",
                     "township": "NORRA ÅSUM",
                     "sumOfPercentagesInclChurchFeePercentage": 33.32,
                     "sumOfPercentagesExclChurchFeePercentage": 32.4,
                     "municipalityTaxPercentage": 21.46,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 0.92
                  },
                  {
                     "townshipCode": "12 90  09",
                     "township": "NOSABY",
                     "sumOfPercentagesInclChurchFeePercentage": 33.43,
                     "sumOfPercentagesExclChurchFeePercentage": 32.33,
                     "municipalityTaxPercentage": 21.46,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.18,
                     "churchFeePercentage": 1.1
                  },
                  {
                     "townshipCode": "12 90  35",
                     "township": "OPPMANNA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.88,
                     "sumOfPercentagesExclChurchFeePercentage": 32.65,
                     "municipalityTaxPercentage": 21.46,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.5,
                     "churchFeePercentage": 1.23
                  },
                  {
                     "townshipCode": "12 90  05",
                     "township": "TRÄNE-DJURRÖD",
                     "sumOfPercentagesInclChurchFeePercentage": 33.6,
                     "sumOfPercentagesExclChurchFeePercentage": 32.42,
                     "municipalityTaxPercentage": 21.46,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.18
                  },
                  {
                     "townshipCode": "12 90  07",
                     "township": "VÄ-SKEPPARSLÖV",
                     "sumOfPercentagesInclChurchFeePercentage": 33.6,
                     "sumOfPercentagesExclChurchFeePercentage": 32.42,
                     "municipalityTaxPercentage": 21.46,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.18
                  },
                  {
                     "townshipCode": "12 90  32",
                     "township": "VÄSTRA OCH ÖSTRA VRAM",
                     "sumOfPercentagesInclChurchFeePercentage": 33.68,
                     "sumOfPercentagesExclChurchFeePercentage": 32.45,
                     "municipalityTaxPercentage": 21.46,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.23
                  },
                  {
                     "townshipCode": "12 90  34",
                     "township": "VÅNGA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.88,
                     "sumOfPercentagesExclChurchFeePercentage": 32.65,
                     "municipalityTaxPercentage": 21.46,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.5,
                     "churchFeePercentage": 1.23
                  },
                  {
                     "townshipCode": "12 90  03",
                     "township": "ÄSPHULT",
                     "sumOfPercentagesInclChurchFeePercentage": 33.68,
                     "sumOfPercentagesExclChurchFeePercentage": 32.45,
                     "municipalityTaxPercentage": 21.46,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.23
                  },
                  {
                     "townshipCode": "12 90  15",
                     "township": "ÅHUS",
                     "sumOfPercentagesInclChurchFeePercentage": 33.095,
                     "sumOfPercentagesExclChurchFeePercentage": 32.255,
                     "municipalityTaxPercentage": 21.46,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.105,
                     "churchFeePercentage": 0.84
                  }
               ]
            },
            {
               "municipality": "KRISTINEHAMN",
               "townships": [
                  {
                     "townshipCode": "17 81  01",
                     "township": "KRISTINEHAMN",
                     "sumOfPercentagesInclChurchFeePercentage": 35.1,
                     "sumOfPercentagesExclChurchFeePercentage": 33.98,
                     "municipalityTaxPercentage": 22.45,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "17 81  03",
                     "township": "RUDSKOGA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.1,
                     "sumOfPercentagesExclChurchFeePercentage": 33.98,
                     "municipalityTaxPercentage": 22.45,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "17 81  05",
                     "township": "VISNUM",
                     "sumOfPercentagesInclChurchFeePercentage": 35.1,
                     "sumOfPercentagesExclChurchFeePercentage": 33.98,
                     "municipalityTaxPercentage": 22.45,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "17 81  04",
                     "township": "VISNUMS-KIL",
                     "sumOfPercentagesInclChurchFeePercentage": 35.1,
                     "sumOfPercentagesExclChurchFeePercentage": 33.98,
                     "municipalityTaxPercentage": 22.45,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "17 81  06",
                     "township": "ÖLME",
                     "sumOfPercentagesInclChurchFeePercentage": 35.1,
                     "sumOfPercentagesExclChurchFeePercentage": 33.98,
                     "municipalityTaxPercentage": 22.45,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.12
                  }
               ]
            },
            {
               "municipality": "KROKOM",
               "townships": [
                  {
                     "townshipCode": "23 09  10",
                     "township": "ALSEN",
                     "sumOfPercentagesInclChurchFeePercentage": 35.21,
                     "sumOfPercentagesExclChurchFeePercentage": 33.87,
                     "municipalityTaxPercentage": 22.17,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.5,
                     "churchFeePercentage": 1.34
                  },
                  {
                     "townshipCode": "23 09  03",
                     "township": "ASPÅS",
                     "sumOfPercentagesInclChurchFeePercentage": 35.02,
                     "sumOfPercentagesExclChurchFeePercentage": 33.58,
                     "municipalityTaxPercentage": 22.17,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.21,
                     "churchFeePercentage": 1.44
                  },
                  {
                     "townshipCode": "23 09  06",
                     "township": "FÖLLINGEBYGDEN",
                     "sumOfPercentagesInclChurchFeePercentage": 35.35,
                     "sumOfPercentagesExclChurchFeePercentage": 34.02,
                     "municipalityTaxPercentage": 22.17,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.65,
                     "churchFeePercentage": 1.33
                  },
                  {
                     "townshipCode": "23 09  02",
                     "township": "NÄSKOTT",
                     "sumOfPercentagesInclChurchFeePercentage": 35.02,
                     "sumOfPercentagesExclChurchFeePercentage": 33.58,
                     "municipalityTaxPercentage": 22.17,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.21,
                     "churchFeePercentage": 1.44
                  },
                  {
                     "townshipCode": "23 09  08",
                     "township": "OFFERDAL",
                     "sumOfPercentagesInclChurchFeePercentage": 35.21,
                     "sumOfPercentagesExclChurchFeePercentage": 33.87,
                     "municipalityTaxPercentage": 22.17,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.5,
                     "churchFeePercentage": 1.34
                  },
                  {
                     "townshipCode": "23 09  01",
                     "township": "RÖDÖN",
                     "sumOfPercentagesInclChurchFeePercentage": 35.02,
                     "sumOfPercentagesExclChurchFeePercentage": 33.58,
                     "municipalityTaxPercentage": 22.17,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.21,
                     "churchFeePercentage": 1.44
                  },
                  {
                     "townshipCode": "23 09  04",
                     "township": "ÅS",
                     "sumOfPercentagesInclChurchFeePercentage": 35.02,
                     "sumOfPercentagesExclChurchFeePercentage": 33.58,
                     "municipalityTaxPercentage": 22.17,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.21,
                     "churchFeePercentage": 1.44
                  }
               ]
            },
            {
               "municipality": "KUMLA",
               "townships": [
                  {
                     "townshipCode": "18 81  03",
                     "township": "EKEBY",
                     "sumOfPercentagesInclChurchFeePercentage": 33.61,
                     "sumOfPercentagesExclChurchFeePercentage": 32.59,
                     "municipalityTaxPercentage": 20.8,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1.02
                  },
                  {
                     "townshipCode": "18 81  02",
                     "township": "HARDEMO",
                     "sumOfPercentagesInclChurchFeePercentage": 33.61,
                     "sumOfPercentagesExclChurchFeePercentage": 32.59,
                     "municipalityTaxPercentage": 20.8,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1.02
                  },
                  {
                     "townshipCode": "18 81  01",
                     "township": "KUMLA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.61,
                     "sumOfPercentagesExclChurchFeePercentage": 32.59,
                     "municipalityTaxPercentage": 20.8,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1.02
                  }
               ]
            },
            {
               "municipality": "KUNGSBACKA",
               "townships": [
                  {
                     "townshipCode": "13 84  12",
                     "township": "FJÄRÅS-FÖRLANDA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.56,
                     "sumOfPercentagesExclChurchFeePercentage": 32.38,
                     "municipalityTaxPercentage": 21.33,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 1.18
                  },
                  {
                     "townshipCode": "13 84  06",
                     "township": "FRILLESÅS",
                     "sumOfPercentagesInclChurchFeePercentage": 33.78,
                     "sumOfPercentagesExclChurchFeePercentage": 32.35,
                     "municipalityTaxPercentage": 21.33,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 1.43
                  },
                  {
                     "townshipCode": "13 84  09",
                     "township": "GÄLLINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.78,
                     "sumOfPercentagesExclChurchFeePercentage": 32.35,
                     "municipalityTaxPercentage": 21.33,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 1.43
                  },
                  {
                     "townshipCode": "13 84  10",
                     "township": "IDALA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.78,
                     "sumOfPercentagesExclChurchFeePercentage": 32.35,
                     "municipalityTaxPercentage": 21.33,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 1.43
                  },
                  {
                     "townshipCode": "13 84  15",
                     "township": "KULLAVIK",
                     "sumOfPercentagesInclChurchFeePercentage": 33.33,
                     "sumOfPercentagesExclChurchFeePercentage": 32.3,
                     "municipalityTaxPercentage": 21.33,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.15,
                     "churchFeePercentage": 1.03
                  },
                  {
                     "townshipCode": "13 84  01",
                     "township": "KUNGSBACKA-HANHALS",
                     "sumOfPercentagesInclChurchFeePercentage": 33.4,
                     "sumOfPercentagesExclChurchFeePercentage": 32.37,
                     "municipalityTaxPercentage": 21.33,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 1.03
                  },
                  {
                     "townshipCode": "13 84  07",
                     "township": "LANDA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.78,
                     "sumOfPercentagesExclChurchFeePercentage": 32.35,
                     "municipalityTaxPercentage": 21.33,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 1.43
                  },
                  {
                     "townshipCode": "13 84  14",
                     "township": "ONSALA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.24,
                     "sumOfPercentagesExclChurchFeePercentage": 32.26,
                     "municipalityTaxPercentage": 21.33,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.11,
                     "churchFeePercentage": 0.98
                  },
                  {
                     "townshipCode": "13 84  05",
                     "township": "SLÄP",
                     "sumOfPercentagesInclChurchFeePercentage": 33.33,
                     "sumOfPercentagesExclChurchFeePercentage": 32.3,
                     "municipalityTaxPercentage": 21.33,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.15,
                     "churchFeePercentage": 1.03
                  },
                  {
                     "townshipCode": "13 84  02",
                     "township": "TÖLÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 33.51,
                     "sumOfPercentagesExclChurchFeePercentage": 32.38,
                     "municipalityTaxPercentage": 21.33,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 1.13
                  },
                  {
                     "townshipCode": "13 84  04",
                     "township": "VALLDA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.33,
                     "sumOfPercentagesExclChurchFeePercentage": 32.3,
                     "municipalityTaxPercentage": 21.33,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.15,
                     "churchFeePercentage": 1.03
                  },
                  {
                     "townshipCode": "13 84  03",
                     "township": "ÄLVSÅKER",
                     "sumOfPercentagesInclChurchFeePercentage": 33.51,
                     "sumOfPercentagesExclChurchFeePercentage": 32.38,
                     "municipalityTaxPercentage": 21.33,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 1.13
                  },
                  {
                     "townshipCode": "13 84  08",
                     "township": "ÖLMEVALLA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.78,
                     "sumOfPercentagesExclChurchFeePercentage": 32.35,
                     "municipalityTaxPercentage": 21.33,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 1.43
                  }
               ]
            },
            {
               "municipality": "KUNGSÖR",
               "townships": [
                  {
                     "townshipCode": "19 60  01",
                     "township": "KUNGSÖR",
                     "sumOfPercentagesInclChurchFeePercentage": 34.36,
                     "sumOfPercentagesExclChurchFeePercentage": 33.21,
                     "municipalityTaxPercentage": 22.03,
                     "countyTaxPercentage": 10.88,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.15
                  }
               ]
            },
            {
               "municipality": "KUNGÄLV",
               "townships": [
                  {
                     "townshipCode": "14 82  04",
                     "township": "HARESTAD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.28,
                     "sumOfPercentagesExclChurchFeePercentage": 33.17,
                     "municipalityTaxPercentage": 21.44,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.11
                  },
                  {
                     "townshipCode": "14 82  10",
                     "township": "HÅLTA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.23,
                     "sumOfPercentagesExclChurchFeePercentage": 33.08,
                     "municipalityTaxPercentage": 21.44,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.16,
                     "churchFeePercentage": 1.15
                  },
                  {
                     "townshipCode": "14 82  09",
                     "township": "KAREBY",
                     "sumOfPercentagesInclChurchFeePercentage": 34.12,
                     "sumOfPercentagesExclChurchFeePercentage": 33.17,
                     "municipalityTaxPercentage": 21.44,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 0.95
                  },
                  {
                     "townshipCode": "14 82  01",
                     "township": "KUNGÄLV",
                     "sumOfPercentagesInclChurchFeePercentage": 34.02,
                     "sumOfPercentagesExclChurchFeePercentage": 33.09,
                     "municipalityTaxPercentage": 21.44,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.17,
                     "churchFeePercentage": 0.93
                  },
                  {
                     "townshipCode": "14 82  06",
                     "township": "LYCKE",
                     "sumOfPercentagesInclChurchFeePercentage": 34.28,
                     "sumOfPercentagesExclChurchFeePercentage": 33.17,
                     "municipalityTaxPercentage": 21.44,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.11
                  },
                  {
                     "townshipCode": "14 82  03",
                     "township": "MARSTRAND",
                     "sumOfPercentagesInclChurchFeePercentage": 34.28,
                     "sumOfPercentagesExclChurchFeePercentage": 33.17,
                     "municipalityTaxPercentage": 21.44,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.11
                  },
                  {
                     "townshipCode": "14 82  08",
                     "township": "ROMELANDA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.12,
                     "sumOfPercentagesExclChurchFeePercentage": 33.17,
                     "municipalityTaxPercentage": 21.44,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 0.95
                  },
                  {
                     "townshipCode": "14 82  11",
                     "township": "SOLBERGA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.23,
                     "sumOfPercentagesExclChurchFeePercentage": 33.08,
                     "municipalityTaxPercentage": 21.44,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.16,
                     "churchFeePercentage": 1.15
                  },
                  {
                     "townshipCode": "14 82  05",
                     "township": "TORSBY",
                     "sumOfPercentagesInclChurchFeePercentage": 34.28,
                     "sumOfPercentagesExclChurchFeePercentage": 33.17,
                     "municipalityTaxPercentage": 21.44,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.11
                  }
               ]
            },
            {
               "municipality": "KÄVLINGE",
               "townships": [
                  {
                     "townshipCode": "12 61  02",
                     "township": "DAGSTORP",
                     "sumOfPercentagesInclChurchFeePercentage": 30.03,
                     "sumOfPercentagesExclChurchFeePercentage": 29.38,
                     "municipalityTaxPercentage": 18.51,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.18,
                     "churchFeePercentage": 0.65
                  },
                  {
                     "townshipCode": "12 61  10",
                     "township": "HOFTERUP",
                     "sumOfPercentagesInclChurchFeePercentage": 30.03,
                     "sumOfPercentagesExclChurchFeePercentage": 29.38,
                     "municipalityTaxPercentage": 18.51,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.18,
                     "churchFeePercentage": 0.65
                  },
                  {
                     "townshipCode": "12 61  01",
                     "township": "KÄVLINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 30.48,
                     "sumOfPercentagesExclChurchFeePercentage": 29.39,
                     "municipalityTaxPercentage": 18.51,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.19,
                     "churchFeePercentage": 1.09
                  },
                  {
                     "townshipCode": "12 61  04",
                     "township": "LACKALÄNGA-STÄVIE",
                     "sumOfPercentagesInclChurchFeePercentage": 30.63,
                     "sumOfPercentagesExclChurchFeePercentage": 29.38,
                     "municipalityTaxPercentage": 18.51,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.18,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "12 61  12",
                     "township": "LÖDDEBYGDEN",
                     "sumOfPercentagesInclChurchFeePercentage": 30.46,
                     "sumOfPercentagesExclChurchFeePercentage": 29.39,
                     "municipalityTaxPercentage": 18.51,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.19,
                     "churchFeePercentage": 1.07
                  },
                  {
                     "townshipCode": "12 61  03",
                     "township": "VÄSTRA KARABY",
                     "sumOfPercentagesInclChurchFeePercentage": 30.03,
                     "sumOfPercentagesExclChurchFeePercentage": 29.38,
                     "municipalityTaxPercentage": 18.51,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.18,
                     "churchFeePercentage": 0.65
                  }
               ]
            },
            {
               "municipality": "KÖPING",
               "townships": [
                  {
                     "townshipCode": "19 83  01",
                     "township": "KÖPINGSBYGDEN",
                     "sumOfPercentagesInclChurchFeePercentage": 34.34,
                     "sumOfPercentagesExclChurchFeePercentage": 33.29,
                     "municipalityTaxPercentage": 22.16,
                     "countyTaxPercentage": 10.88,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.05
                  },
                  {
                     "townshipCode": "19 83  04",
                     "township": "MALMA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.34,
                     "sumOfPercentagesExclChurchFeePercentage": 33.29,
                     "municipalityTaxPercentage": 22.16,
                     "countyTaxPercentage": 10.88,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.05
                  }
               ]
            },
            {
               "municipality": "LAHOLM",
               "townships": [
                  {
                     "townshipCode": "13 81  03",
                     "township": "HASSLÖV-VÅXTORP",
                     "sumOfPercentagesInclChurchFeePercentage": 32.965,
                     "sumOfPercentagesExclChurchFeePercentage": 31.875,
                     "municipalityTaxPercentage": 20.58,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.475,
                     "churchFeePercentage": 1.09
                  },
                  {
                     "townshipCode": "13 81  06",
                     "township": "HISHULT",
                     "sumOfPercentagesInclChurchFeePercentage": 32.965,
                     "sumOfPercentagesExclChurchFeePercentage": 31.875,
                     "municipalityTaxPercentage": 20.58,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.475,
                     "churchFeePercentage": 1.09
                  },
                  {
                     "townshipCode": "13 81  09",
                     "township": "KNÄRED",
                     "sumOfPercentagesInclChurchFeePercentage": 32.965,
                     "sumOfPercentagesExclChurchFeePercentage": 31.875,
                     "municipalityTaxPercentage": 20.58,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.475,
                     "churchFeePercentage": 1.09
                  },
                  {
                     "townshipCode": "13 81  01",
                     "township": "LAHOLM",
                     "sumOfPercentagesInclChurchFeePercentage": 32.75,
                     "sumOfPercentagesExclChurchFeePercentage": 31.72,
                     "municipalityTaxPercentage": 20.58,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.03
                  },
                  {
                     "townshipCode": "13 81  07",
                     "township": "RÄNNESLÖV-YSBY",
                     "sumOfPercentagesInclChurchFeePercentage": 32.965,
                     "sumOfPercentagesExclChurchFeePercentage": 31.875,
                     "municipalityTaxPercentage": 20.58,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.475,
                     "churchFeePercentage": 1.09
                  },
                  {
                     "townshipCode": "13 81  05",
                     "township": "SKUMMESLÖV",
                     "sumOfPercentagesInclChurchFeePercentage": 32.75,
                     "sumOfPercentagesExclChurchFeePercentage": 31.72,
                     "municipalityTaxPercentage": 20.58,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.03
                  },
                  {
                     "townshipCode": "13 81  11",
                     "township": "VEINGE-TJÄRBY",
                     "sumOfPercentagesInclChurchFeePercentage": 32.965,
                     "sumOfPercentagesExclChurchFeePercentage": 31.875,
                     "municipalityTaxPercentage": 20.58,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.475,
                     "churchFeePercentage": 1.09
                  }
               ]
            },
            {
               "municipality": "LANDSKRONA",
               "townships": [
                  {
                     "townshipCode": "12 82  04",
                     "township": "HÄLJARP",
                     "sumOfPercentagesInclChurchFeePercentage": 32.28,
                     "sumOfPercentagesExclChurchFeePercentage": 31.2,
                     "municipalityTaxPercentage": 20.24,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.08
                  },
                  {
                     "townshipCode": "12 82  07",
                     "township": "KVISTOFTA, DEL",
                     "sumOfPercentagesInclChurchFeePercentage": 32.21,
                     "sumOfPercentagesExclChurchFeePercentage": 31.18,
                     "municipalityTaxPercentage": 20.24,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.03
                  },
                  {
                     "townshipCode": "12 82  01",
                     "township": "LANDSKRONA, DEL",
                     "sumOfPercentagesInclChurchFeePercentage": 32.31,
                     "sumOfPercentagesExclChurchFeePercentage": 31.35,
                     "municipalityTaxPercentage": 20.24,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.42,
                     "churchFeePercentage": 0.96
                  }
               ]
            },
            {
               "municipality": "LAXÅ",
               "townships": [
                  {
                     "townshipCode": "18 60  02",
                     "township": "FINNERÖDJA-TIVED",
                     "sumOfPercentagesInclChurchFeePercentage": 35.35,
                     "sumOfPercentagesExclChurchFeePercentage": 34.19,
                     "municipalityTaxPercentage": 22.18,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.46,
                     "churchFeePercentage": 1.16
                  },
                  {
                     "townshipCode": "18 60  01",
                     "township": "RAMUNDEBODA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.35,
                     "sumOfPercentagesExclChurchFeePercentage": 34.19,
                     "municipalityTaxPercentage": 22.18,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.46,
                     "churchFeePercentage": 1.16
                  },
                  {
                     "townshipCode": "18 60  04",
                     "township": "SKAGERSHULT",
                     "sumOfPercentagesInclChurchFeePercentage": 35.35,
                     "sumOfPercentagesExclChurchFeePercentage": 34.19,
                     "municipalityTaxPercentage": 22.18,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.46,
                     "churchFeePercentage": 1.16
                  }
               ]
            },
            {
               "municipality": "LEKEBERG",
               "townships": [
                  {
                     "townshipCode": "18 14  05",
                     "township": "EDSBERG",
                     "sumOfPercentagesInclChurchFeePercentage": 34.03,
                     "sumOfPercentagesExclChurchFeePercentage": 33.13,
                     "municipalityTaxPercentage": 21.43,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.15,
                     "churchFeePercentage": 0.9
                  },
                  {
                     "townshipCode": "18 14  02",
                     "township": "KNISTA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.62,
                     "sumOfPercentagesExclChurchFeePercentage": 33.34,
                     "municipalityTaxPercentage": 21.43,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.28
                  }
               ]
            },
            {
               "municipality": "LEKSAND",
               "townships": [
                  {
                     "townshipCode": "20 29  02",
                     "township": "DJURA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.13,
                     "sumOfPercentagesExclChurchFeePercentage": 33.77,
                     "municipalityTaxPercentage": 22.29,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.36
                  },
                  {
                     "townshipCode": "20 29  01",
                     "township": "LEKSAND",
                     "sumOfPercentagesInclChurchFeePercentage": 35.13,
                     "sumOfPercentagesExclChurchFeePercentage": 33.77,
                     "municipalityTaxPercentage": 22.29,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.36
                  },
                  {
                     "townshipCode": "20 29  04",
                     "township": "SILJANSNÄS",
                     "sumOfPercentagesInclChurchFeePercentage": 35.13,
                     "sumOfPercentagesExclChurchFeePercentage": 33.77,
                     "municipalityTaxPercentage": 22.29,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.36
                  },
                  {
                     "townshipCode": "20 29  03",
                     "township": "ÅL",
                     "sumOfPercentagesInclChurchFeePercentage": 35.21,
                     "sumOfPercentagesExclChurchFeePercentage": 33.73,
                     "municipalityTaxPercentage": 22.29,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.48
                  }
               ]
            },
            {
               "municipality": "LERUM",
               "townships": [
                  {
                     "townshipCode": "14 41  01",
                     "township": "LERUM",
                     "sumOfPercentagesInclChurchFeePercentage": 33.33,
                     "sumOfPercentagesExclChurchFeePercentage": 32.33,
                     "municipalityTaxPercentage": 20.65,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 1
                  },
                  {
                     "townshipCode": "14 41  02",
                     "township": "SKALLSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 33.27,
                     "sumOfPercentagesExclChurchFeePercentage": 32.3,
                     "municipalityTaxPercentage": 20.65,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.17,
                     "churchFeePercentage": 0.97
                  },
                  {
                     "townshipCode": "14 41  03",
                     "township": "STORA LUNDBY",
                     "sumOfPercentagesInclChurchFeePercentage": 33.41,
                     "sumOfPercentagesExclChurchFeePercentage": 32.31,
                     "municipalityTaxPercentage": 20.65,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.18,
                     "churchFeePercentage": 1.1
                  },
                  {
                     "townshipCode": "14 41  04",
                     "township": "ÖSTAD",
                     "sumOfPercentagesInclChurchFeePercentage": 33.41,
                     "sumOfPercentagesExclChurchFeePercentage": 32.31,
                     "municipalityTaxPercentage": 20.65,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.18,
                     "churchFeePercentage": 1.1
                  }
               ]
            },
            {
               "municipality": "LESSEBO",
               "townships": [
                  {
                     "townshipCode": "07 61  03",
                     "township": "EKEBERGA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.04,
                     "sumOfPercentagesExclChurchFeePercentage": 33.71,
                     "municipalityTaxPercentage": 21.81,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.33
                  },
                  {
                     "townshipCode": "07 61  02",
                     "township": "HOVMANTORP",
                     "sumOfPercentagesInclChurchFeePercentage": 35.04,
                     "sumOfPercentagesExclChurchFeePercentage": 33.71,
                     "municipalityTaxPercentage": 21.81,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.33
                  },
                  {
                     "townshipCode": "07 61  01",
                     "township": "LESSEBO",
                     "sumOfPercentagesInclChurchFeePercentage": 35.04,
                     "sumOfPercentagesExclChurchFeePercentage": 33.71,
                     "municipalityTaxPercentage": 21.81,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.33
                  },
                  {
                     "townshipCode": "07 61  04",
                     "township": "LJUDER",
                     "sumOfPercentagesInclChurchFeePercentage": 35.04,
                     "sumOfPercentagesExclChurchFeePercentage": 33.71,
                     "municipalityTaxPercentage": 21.81,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.33
                  }
               ]
            },
            {
               "municipality": "LIDINGÖ",
               "townships": [
                  {
                     "townshipCode": "01 86  01",
                     "township": "LIDINGÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 31.48,
                     "sumOfPercentagesExclChurchFeePercentage": 30.81,
                     "municipalityTaxPercentage": 18.62,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.09,
                     "churchFeePercentage": 0.67
                  }
               ]
            },
            {
               "municipality": "LIDKÖPING",
               "townships": [
                  {
                     "townshipCode": "14 94  03",
                     "township": "JÄRPÅS",
                     "sumOfPercentagesInclChurchFeePercentage": 34.18,
                     "sumOfPercentagesExclChurchFeePercentage": 32.79,
                     "municipalityTaxPercentage": 20.86,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.39
                  },
                  {
                     "townshipCode": "14 94  05",
                     "township": "KÅLLANDS-RÅDA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.18,
                     "sumOfPercentagesExclChurchFeePercentage": 32.79,
                     "municipalityTaxPercentage": 20.86,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.39
                  },
                  {
                     "townshipCode": "14 94  01",
                     "township": "LIDKÖPING",
                     "sumOfPercentagesInclChurchFeePercentage": 33.8,
                     "sumOfPercentagesExclChurchFeePercentage": 32.69,
                     "municipalityTaxPercentage": 20.86,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.11
                  },
                  {
                     "townshipCode": "14 94  13",
                     "township": "SUNNERSBERG",
                     "sumOfPercentagesInclChurchFeePercentage": 33.94,
                     "sumOfPercentagesExclChurchFeePercentage": 32.64,
                     "municipalityTaxPercentage": 20.86,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.3
                  },
                  {
                     "townshipCode": "14 94  24",
                     "township": "SÄVARE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.96,
                     "sumOfPercentagesExclChurchFeePercentage": 32.59,
                     "municipalityTaxPercentage": 20.86,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.37
                  },
                  {
                     "townshipCode": "14 94  31",
                     "township": "ÖRSLÖSA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.18,
                     "sumOfPercentagesExclChurchFeePercentage": 32.79,
                     "municipalityTaxPercentage": 20.86,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.39
                  }
               ]
            },
            {
               "municipality": "LILLA EDET",
               "townships": [
                  {
                     "townshipCode": "14 62  01",
                     "township": "FUXERNA-ÅSBRÄCKA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.22,
                     "sumOfPercentagesExclChurchFeePercentage": 34.17,
                     "municipalityTaxPercentage": 22.37,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.05
                  },
                  {
                     "townshipCode": "14 62  07",
                     "township": "HJÄRTUM",
                     "sumOfPercentagesInclChurchFeePercentage": 35.22,
                     "sumOfPercentagesExclChurchFeePercentage": 34.17,
                     "municipalityTaxPercentage": 22.37,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.05
                  },
                  {
                     "townshipCode": "14 62  04",
                     "township": "LÖDÖSE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.22,
                     "sumOfPercentagesExclChurchFeePercentage": 34.12,
                     "municipalityTaxPercentage": 22.37,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.1
                  },
                  {
                     "townshipCode": "14 62  06",
                     "township": "VÄSTERLANDA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.22,
                     "sumOfPercentagesExclChurchFeePercentage": 34.17,
                     "municipalityTaxPercentage": 22.37,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.05
                  }
               ]
            },
            {
               "municipality": "LINDESBERG",
               "townships": [
                  {
                     "townshipCode": "18 85  05",
                     "township": "FELLINGSBRO",
                     "sumOfPercentagesInclChurchFeePercentage": 35.4,
                     "sumOfPercentagesExclChurchFeePercentage": 34.16,
                     "municipalityTaxPercentage": 22.3,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 1.24
                  },
                  {
                     "townshipCode": "18 85  03",
                     "township": "GULDSMEDSHYTTAN",
                     "sumOfPercentagesInclChurchFeePercentage": 35.43,
                     "sumOfPercentagesExclChurchFeePercentage": 34.25,
                     "municipalityTaxPercentage": 22.3,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.18
                  },
                  {
                     "townshipCode": "18 85  02",
                     "township": "LINDE BERGSLAG",
                     "sumOfPercentagesInclChurchFeePercentage": 35.3,
                     "sumOfPercentagesExclChurchFeePercentage": 34.08,
                     "municipalityTaxPercentage": 22.3,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 1.22
                  },
                  {
                     "townshipCode": "18 85  04",
                     "township": "NÄSBY",
                     "sumOfPercentagesInclChurchFeePercentage": 35.4,
                     "sumOfPercentagesExclChurchFeePercentage": 34.16,
                     "municipalityTaxPercentage": 22.3,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 1.24
                  }
               ]
            },
            {
               "municipality": "LINKÖPING",
               "townships": [
                  {
                     "townshipCode": "05 80  37",
                     "township": "GOTTFRIDSBERG",
                     "sumOfPercentagesInclChurchFeePercentage": 32.19,
                     "sumOfPercentagesExclChurchFeePercentage": 31.05,
                     "municipalityTaxPercentage": 20.2,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.15,
                     "churchFeePercentage": 1.14
                  },
                  {
                     "townshipCode": "05 80  05",
                     "township": "KÄRNA",
                     "sumOfPercentagesInclChurchFeePercentage": 32.24,
                     "sumOfPercentagesExclChurchFeePercentage": 31.12,
                     "municipalityTaxPercentage": 20.2,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "05 80  03",
                     "township": "LANDERYD",
                     "sumOfPercentagesInclChurchFeePercentage": 32.19,
                     "sumOfPercentagesExclChurchFeePercentage": 31.05,
                     "municipalityTaxPercentage": 20.2,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.15,
                     "churchFeePercentage": 1.14
                  },
                  {
                     "townshipCode": "05 80  33",
                     "township": "LINKÖPINGS BERGA",
                     "sumOfPercentagesInclChurchFeePercentage": 32.19,
                     "sumOfPercentagesExclChurchFeePercentage": 31.05,
                     "municipalityTaxPercentage": 20.2,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.15,
                     "churchFeePercentage": 1.14
                  },
                  {
                     "townshipCode": "05 80  01",
                     "township": "LINKÖPINGS DOMKYRKOFÖRS.",
                     "sumOfPercentagesInclChurchFeePercentage": 32.19,
                     "sumOfPercentagesExclChurchFeePercentage": 31.05,
                     "municipalityTaxPercentage": 20.2,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.15,
                     "churchFeePercentage": 1.14
                  },
                  {
                     "townshipCode": "05 80  34",
                     "township": "LINKÖPINGS JOHANNELUND",
                     "sumOfPercentagesInclChurchFeePercentage": 32.19,
                     "sumOfPercentagesExclChurchFeePercentage": 31.05,
                     "municipalityTaxPercentage": 20.2,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.15,
                     "churchFeePercentage": 1.14
                  },
                  {
                     "townshipCode": "05 80  36",
                     "township": "LINKÖPINGS RYD",
                     "sumOfPercentagesInclChurchFeePercentage": 32.19,
                     "sumOfPercentagesExclChurchFeePercentage": 31.05,
                     "municipalityTaxPercentage": 20.2,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.15,
                     "churchFeePercentage": 1.14
                  },
                  {
                     "townshipCode": "05 80  02",
                     "township": "LINKÖPINGS S:T LARS",
                     "sumOfPercentagesInclChurchFeePercentage": 32.19,
                     "sumOfPercentagesExclChurchFeePercentage": 31.05,
                     "municipalityTaxPercentage": 20.2,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.15,
                     "churchFeePercentage": 1.14
                  },
                  {
                     "townshipCode": "05 80  35",
                     "township": "LINKÖPINGS SKÄGGETORP",
                     "sumOfPercentagesInclChurchFeePercentage": 32.19,
                     "sumOfPercentagesExclChurchFeePercentage": 31.05,
                     "municipalityTaxPercentage": 20.2,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.15,
                     "churchFeePercentage": 1.14
                  },
                  {
                     "townshipCode": "05 80  11",
                     "township": "NYKIL-GAMMALKIL",
                     "sumOfPercentagesInclChurchFeePercentage": 32.251,
                     "sumOfPercentagesExclChurchFeePercentage": 30.99,
                     "municipalityTaxPercentage": 20.2,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.09,
                     "churchFeePercentage": 1.261
                  },
                  {
                     "townshipCode": "05 80  10",
                     "township": "SKEDA",
                     "sumOfPercentagesInclChurchFeePercentage": 32.251,
                     "sumOfPercentagesExclChurchFeePercentage": 30.99,
                     "municipalityTaxPercentage": 20.2,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.09,
                     "churchFeePercentage": 1.261
                  },
                  {
                     "townshipCode": "05 80  04",
                     "township": "SLAKA",
                     "sumOfPercentagesInclChurchFeePercentage": 32.251,
                     "sumOfPercentagesExclChurchFeePercentage": 30.99,
                     "municipalityTaxPercentage": 20.2,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.09,
                     "churchFeePercentage": 1.261
                  },
                  {
                     "townshipCode": "05 80  12",
                     "township": "ULRIKA",
                     "sumOfPercentagesInclChurchFeePercentage": 32.251,
                     "sumOfPercentagesExclChurchFeePercentage": 30.99,
                     "municipalityTaxPercentage": 20.2,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.09,
                     "churchFeePercentage": 1.261
                  },
                  {
                     "townshipCode": "05 80  18",
                     "township": "VIKINGSTAD",
                     "sumOfPercentagesInclChurchFeePercentage": 32.25,
                     "sumOfPercentagesExclChurchFeePercentage": 31.15,
                     "municipalityTaxPercentage": 20.2,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.1
                  },
                  {
                     "townshipCode": "05 80  08",
                     "township": "VIST",
                     "sumOfPercentagesInclChurchFeePercentage": 32.5,
                     "sumOfPercentagesExclChurchFeePercentage": 31.08,
                     "municipalityTaxPercentage": 20.2,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.18,
                     "churchFeePercentage": 1.42
                  },
                  {
                     "townshipCode": "05 80  19",
                     "township": "VRETA KLOSTER",
                     "sumOfPercentagesInclChurchFeePercentage": 32.4,
                     "sumOfPercentagesExclChurchFeePercentage": 31.19,
                     "municipalityTaxPercentage": 20.2,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.21
                  },
                  {
                     "townshipCode": "05 80  09",
                     "township": "VÅRDNÄS",
                     "sumOfPercentagesInclChurchFeePercentage": 32.5,
                     "sumOfPercentagesExclChurchFeePercentage": 31.08,
                     "municipalityTaxPercentage": 20.2,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.18,
                     "churchFeePercentage": 1.42
                  },
                  {
                     "townshipCode": "05 80  24",
                     "township": "ÅKERBO",
                     "sumOfPercentagesInclChurchFeePercentage": 32.4,
                     "sumOfPercentagesExclChurchFeePercentage": 31.04,
                     "municipalityTaxPercentage": 20.2,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.14,
                     "churchFeePercentage": 1.36
                  }
               ]
            },
            {
               "municipality": "LJUNGBY",
               "townships": [
                  {
                     "townshipCode": "07 81  02",
                     "township": "AGUNNARYD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.52,
                     "sumOfPercentagesExclChurchFeePercentage": 33.07,
                     "municipalityTaxPercentage": 21.07,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.45
                  },
                  {
                     "townshipCode": "07 81  11",
                     "township": "ANGELSTAD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.12,
                     "sumOfPercentagesExclChurchFeePercentage": 33.07,
                     "municipalityTaxPercentage": 21.07,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.05
                  },
                  {
                     "townshipCode": "07 81  12",
                     "township": "ANNERSTAD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.12,
                     "sumOfPercentagesExclChurchFeePercentage": 33.07,
                     "municipalityTaxPercentage": 21.07,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.05
                  },
                  {
                     "townshipCode": "07 81  08",
                     "township": "BERGA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.57,
                     "sumOfPercentagesExclChurchFeePercentage": 33.16,
                     "municipalityTaxPercentage": 21.07,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.49,
                     "churchFeePercentage": 1.41
                  },
                  {
                     "townshipCode": "07 81  18",
                     "township": "BOLMSÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.57,
                     "sumOfPercentagesExclChurchFeePercentage": 33.16,
                     "municipalityTaxPercentage": 21.07,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.49,
                     "churchFeePercentage": 1.41
                  },
                  {
                     "townshipCode": "07 81  09",
                     "township": "DÖRARP",
                     "sumOfPercentagesInclChurchFeePercentage": 34.57,
                     "sumOfPercentagesExclChurchFeePercentage": 33.16,
                     "municipalityTaxPercentage": 21.07,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.49,
                     "churchFeePercentage": 1.41
                  },
                  {
                     "townshipCode": "07 81  16",
                     "township": "LIDHULT",
                     "sumOfPercentagesInclChurchFeePercentage": 34.12,
                     "sumOfPercentagesExclChurchFeePercentage": 33.07,
                     "municipalityTaxPercentage": 21.07,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.05
                  },
                  {
                     "townshipCode": "07 81  01",
                     "township": "LJUNGBY",
                     "sumOfPercentagesInclChurchFeePercentage": 34.12,
                     "sumOfPercentagesExclChurchFeePercentage": 33.07,
                     "municipalityTaxPercentage": 21.07,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.05
                  },
                  {
                     "townshipCode": "07 81  20",
                     "township": "LJUNGBY MARIA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.12,
                     "sumOfPercentagesExclChurchFeePercentage": 33.07,
                     "municipalityTaxPercentage": 21.07,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.05
                  },
                  {
                     "townshipCode": "07 81  17",
                     "township": "ODENSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.12,
                     "sumOfPercentagesExclChurchFeePercentage": 33.07,
                     "municipalityTaxPercentage": 21.07,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.05
                  },
                  {
                     "townshipCode": "07 81  03",
                     "township": "RYSSBY",
                     "sumOfPercentagesInclChurchFeePercentage": 34.52,
                     "sumOfPercentagesExclChurchFeePercentage": 33.07,
                     "municipalityTaxPercentage": 21.07,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.45
                  },
                  {
                     "townshipCode": "07 81  07",
                     "township": "SÖDRA LJUNGA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.39,
                     "sumOfPercentagesExclChurchFeePercentage": 33.14,
                     "municipalityTaxPercentage": 21.07,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.47,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "07 81  19",
                     "township": "TANNÅKER",
                     "sumOfPercentagesInclChurchFeePercentage": 34.57,
                     "sumOfPercentagesExclChurchFeePercentage": 33.16,
                     "municipalityTaxPercentage": 21.07,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.49,
                     "churchFeePercentage": 1.41
                  },
                  {
                     "townshipCode": "07 81  14",
                     "township": "TORPA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.12,
                     "sumOfPercentagesExclChurchFeePercentage": 33.07,
                     "municipalityTaxPercentage": 21.07,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.05
                  },
                  {
                     "townshipCode": "07 81  04",
                     "township": "TUTARYD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.52,
                     "sumOfPercentagesExclChurchFeePercentage": 33.07,
                     "municipalityTaxPercentage": 21.07,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.45
                  },
                  {
                     "townshipCode": "07 81  10",
                     "township": "VITTARYD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.57,
                     "sumOfPercentagesExclChurchFeePercentage": 33.16,
                     "municipalityTaxPercentage": 21.07,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.49,
                     "churchFeePercentage": 1.41
                  },
                  {
                     "townshipCode": "07 81  15",
                     "township": "VRÅ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.12,
                     "sumOfPercentagesExclChurchFeePercentage": 33.07,
                     "municipalityTaxPercentage": 21.07,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.05
                  }
               ]
            },
            {
               "municipality": "LJUSDAL",
               "townships": [
                  {
                     "townshipCode": "21 61  04",
                     "township": "FÄRILA-KÅRBÖLE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.49,
                     "sumOfPercentagesExclChurchFeePercentage": 34.32,
                     "municipalityTaxPercentage": 22.36,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.17
                  },
                  {
                     "townshipCode": "21 61  07",
                     "township": "JÄRVSÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.37,
                     "sumOfPercentagesExclChurchFeePercentage": 34.17,
                     "municipalityTaxPercentage": 22.36,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.2
                  },
                  {
                     "townshipCode": "21 61  01",
                     "township": "LJUSDAL-RAMSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.11,
                     "sumOfPercentagesExclChurchFeePercentage": 34.19,
                     "municipalityTaxPercentage": 22.36,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 0.92
                  },
                  {
                     "townshipCode": "21 61  03",
                     "township": "LOS-HAMRA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.49,
                     "sumOfPercentagesExclChurchFeePercentage": 34.32,
                     "municipalityTaxPercentage": 22.36,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.17
                  }
               ]
            },
            {
               "municipality": "LJUSNARSBERG",
               "townships": [
                  {
                     "townshipCode": "18 64  01",
                     "township": "LJUSNARSBERG",
                     "sumOfPercentagesInclChurchFeePercentage": 34.23,
                     "sumOfPercentagesExclChurchFeePercentage": 33.04,
                     "municipalityTaxPercentage": 21.05,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.44,
                     "churchFeePercentage": 1.19
                  }
               ]
            },
            {
               "municipality": "LOMMA",
               "townships": [
                  {
                     "townshipCode": "12 62  05",
                     "township": "BJÄRRED",
                     "sumOfPercentagesInclChurchFeePercentage": 31.21,
                     "sumOfPercentagesExclChurchFeePercentage": 30.13,
                     "municipalityTaxPercentage": 19.24,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 1.08
                  },
                  {
                     "townshipCode": "12 62  01",
                     "township": "LOMMA",
                     "sumOfPercentagesInclChurchFeePercentage": 30.95,
                     "sumOfPercentagesExclChurchFeePercentage": 30.13,
                     "municipalityTaxPercentage": 19.24,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 0.82
                  }
               ]
            },
            {
               "municipality": "LUDVIKA",
               "townships": [
                  {
                     "townshipCode": "20 85  03",
                     "township": "GRÄNGE-SÄFSNÄS",
                     "sumOfPercentagesInclChurchFeePercentage": 35.32,
                     "sumOfPercentagesExclChurchFeePercentage": 34.06,
                     "municipalityTaxPercentage": 22.54,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.26
                  },
                  {
                     "townshipCode": "20 85  01",
                     "township": "LUDVIKA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.07,
                     "sumOfPercentagesExclChurchFeePercentage": 34.02,
                     "municipalityTaxPercentage": 22.54,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.05
                  }
               ]
            },
            {
               "municipality": "LULEÅ",
               "townships": [
                  {
                     "townshipCode": "25 80  02",
                     "township": "LULEÅ DOMKYRKOFÖRS.",
                     "sumOfPercentagesInclChurchFeePercentage": 33.83,
                     "sumOfPercentagesExclChurchFeePercentage": 32.87,
                     "municipalityTaxPercentage": 22.5,
                     "countyTaxPercentage": 10.18,
                     "funeralFeePercentage": 0.19,
                     "churchFeePercentage": 0.96
                  },
                  {
                     "townshipCode": "25 80  03",
                     "township": "NEDERLULEÅ",
                     "sumOfPercentagesInclChurchFeePercentage": 33.74,
                     "sumOfPercentagesExclChurchFeePercentage": 32.85,
                     "municipalityTaxPercentage": 22.5,
                     "countyTaxPercentage": 10.18,
                     "funeralFeePercentage": 0.17,
                     "churchFeePercentage": 0.89
                  },
                  {
                     "townshipCode": "25 80  04",
                     "township": "RÅNEÅ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.22,
                     "sumOfPercentagesExclChurchFeePercentage": 33,
                     "municipalityTaxPercentage": 22.5,
                     "countyTaxPercentage": 10.18,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.22
                  }
               ]
            },
            {
               "municipality": "LUND",
               "townships": [
                  {
                     "townshipCode": "12 81  16",
                     "township": "DALBY",
                     "sumOfPercentagesInclChurchFeePercentage": 33.15,
                     "sumOfPercentagesExclChurchFeePercentage": 32.15,
                     "municipalityTaxPercentage": 21.24,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 1
                  },
                  {
                     "townshipCode": "12 81  20",
                     "township": "GENARP",
                     "sumOfPercentagesInclChurchFeePercentage": 33.35,
                     "sumOfPercentagesExclChurchFeePercentage": 32.22,
                     "municipalityTaxPercentage": 21.24,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.13
                  },
                  {
                     "townshipCode": "12 81  24",
                     "township": "HELGEAND",
                     "sumOfPercentagesInclChurchFeePercentage": 33.17,
                     "sumOfPercentagesExclChurchFeePercentage": 32.17,
                     "municipalityTaxPercentage": 21.24,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1
                  },
                  {
                     "townshipCode": "12 81  04",
                     "township": "LUNDS ALLHELGONAFÖRS.",
                     "sumOfPercentagesInclChurchFeePercentage": 33.17,
                     "sumOfPercentagesExclChurchFeePercentage": 32.17,
                     "municipalityTaxPercentage": 21.24,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1
                  },
                  {
                     "townshipCode": "12 81  01",
                     "township": "LUNDS DOMKYRKOFÖRS.",
                     "sumOfPercentagesInclChurchFeePercentage": 33.17,
                     "sumOfPercentagesExclChurchFeePercentage": 32.17,
                     "municipalityTaxPercentage": 21.24,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1
                  },
                  {
                     "townshipCode": "12 81  25",
                     "township": "LUNDS ÖSTRA STADSFÖRS.",
                     "sumOfPercentagesInclChurchFeePercentage": 33.17,
                     "sumOfPercentagesExclChurchFeePercentage": 32.17,
                     "municipalityTaxPercentage": 21.24,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1
                  },
                  {
                     "townshipCode": "12 81  05",
                     "township": "NORRA NÖBBELÖV",
                     "sumOfPercentagesInclChurchFeePercentage": 33.17,
                     "sumOfPercentagesExclChurchFeePercentage": 32.17,
                     "municipalityTaxPercentage": 21.24,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1
                  },
                  {
                     "townshipCode": "12 81  02",
                     "township": "S:T PETERS KLOSTER",
                     "sumOfPercentagesInclChurchFeePercentage": 33.17,
                     "sumOfPercentagesExclChurchFeePercentage": 32.17,
                     "municipalityTaxPercentage": 21.24,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1
                  },
                  {
                     "townshipCode": "12 81  13",
                     "township": "SÖDRA SANDBY",
                     "sumOfPercentagesInclChurchFeePercentage": 33.18,
                     "sumOfPercentagesExclChurchFeePercentage": 32.15,
                     "municipalityTaxPercentage": 21.24,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 1.03
                  },
                  {
                     "townshipCode": "12 81  27",
                     "township": "TORN",
                     "sumOfPercentagesInclChurchFeePercentage": 33.17,
                     "sumOfPercentagesExclChurchFeePercentage": 32.17,
                     "municipalityTaxPercentage": 21.24,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1
                  },
                  {
                     "townshipCode": "12 81  21",
                     "township": "VEBERÖD",
                     "sumOfPercentagesInclChurchFeePercentage": 33.27,
                     "sumOfPercentagesExclChurchFeePercentage": 32.22,
                     "municipalityTaxPercentage": 21.24,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.05
                  }
               ]
            },
            {
               "municipality": "LYCKSELE",
               "townships": [
                  {
                     "townshipCode": "24 81  01",
                     "township": "LYCKSELE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.555,
                     "sumOfPercentagesExclChurchFeePercentage": 34.255,
                     "municipalityTaxPercentage": 23.05,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.405,
                     "churchFeePercentage": 1.3
                  }
               ]
            },
            {
               "municipality": "LYSEKIL",
               "townships": [
                  {
                     "townshipCode": "14 84  05",
                     "township": "BRASTAD",
                     "sumOfPercentagesInclChurchFeePercentage": 35.52,
                     "sumOfPercentagesExclChurchFeePercentage": 34.49,
                     "municipalityTaxPercentage": 22.46,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.55,
                     "churchFeePercentage": 1.03
                  },
                  {
                     "townshipCode": "14 84  04",
                     "township": "BRO",
                     "sumOfPercentagesInclChurchFeePercentage": 35.52,
                     "sumOfPercentagesExclChurchFeePercentage": 34.49,
                     "municipalityTaxPercentage": 22.46,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.55,
                     "churchFeePercentage": 1.03
                  },
                  {
                     "townshipCode": "14 84  02",
                     "township": "LYSE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.6,
                     "sumOfPercentagesExclChurchFeePercentage": 34.32,
                     "municipalityTaxPercentage": 22.46,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.28
                  },
                  {
                     "townshipCode": "14 84  01",
                     "township": "LYSEKIL",
                     "sumOfPercentagesInclChurchFeePercentage": 35.6,
                     "sumOfPercentagesExclChurchFeePercentage": 34.32,
                     "municipalityTaxPercentage": 22.46,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.28
                  },
                  {
                     "townshipCode": "14 84  03",
                     "township": "SKAFTÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.6,
                     "sumOfPercentagesExclChurchFeePercentage": 34.32,
                     "municipalityTaxPercentage": 22.46,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.28
                  }
               ]
            },
            {
               "municipality": "MALMÖ",
               "townships": [
                  {
                     "townshipCode": "12 80  08",
                     "township": "FOSIE",
                     "sumOfPercentagesInclChurchFeePercentage": 32.94,
                     "sumOfPercentagesExclChurchFeePercentage": 32.16,
                     "municipalityTaxPercentage": 21.24,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 0.78
                  },
                  {
                     "townshipCode": "12 80  10",
                     "township": "HUSIE",
                     "sumOfPercentagesInclChurchFeePercentage": 32.94,
                     "sumOfPercentagesExclChurchFeePercentage": 32.16,
                     "municipalityTaxPercentage": 21.24,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 0.78
                  },
                  {
                     "townshipCode": "12 80  16",
                     "township": "HYLLIE",
                     "sumOfPercentagesInclChurchFeePercentage": 32.94,
                     "sumOfPercentagesExclChurchFeePercentage": 32.16,
                     "municipalityTaxPercentage": 21.24,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 0.78
                  },
                  {
                     "townshipCode": "12 80  07",
                     "township": "LIMHAMN",
                     "sumOfPercentagesInclChurchFeePercentage": 32.94,
                     "sumOfPercentagesExclChurchFeePercentage": 32.16,
                     "municipalityTaxPercentage": 21.24,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 0.78
                  },
                  {
                     "townshipCode": "12 80  06",
                     "township": "MALMÖ S:T JOHANNES",
                     "sumOfPercentagesInclChurchFeePercentage": 32.94,
                     "sumOfPercentagesExclChurchFeePercentage": 32.16,
                     "municipalityTaxPercentage": 21.24,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 0.78
                  },
                  {
                     "townshipCode": "12 80  02",
                     "township": "MALMÖ S:T PETRI",
                     "sumOfPercentagesInclChurchFeePercentage": 32.94,
                     "sumOfPercentagesExclChurchFeePercentage": 32.16,
                     "municipalityTaxPercentage": 21.24,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 0.78
                  }
               ]
            },
            {
               "municipality": "MALUNG-SÄLEN",
               "townships": [
                  {
                     "townshipCode": "20 23  03",
                     "township": "LIMA-TRANSTRAND",
                     "sumOfPercentagesInclChurchFeePercentage": 35.47,
                     "sumOfPercentagesExclChurchFeePercentage": 34.13,
                     "municipalityTaxPercentage": 22.54,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.34
                  },
                  {
                     "townshipCode": "20 23  02",
                     "township": "MALUNG",
                     "sumOfPercentagesInclChurchFeePercentage": 35.28,
                     "sumOfPercentagesExclChurchFeePercentage": 34.07,
                     "municipalityTaxPercentage": 22.54,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.37,
                     "churchFeePercentage": 1.21
                  }
               ]
            },
            {
               "municipality": "MALÅ",
               "townships": [
                  {
                     "townshipCode": "24 18  01",
                     "township": "MALÅ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.67,
                     "sumOfPercentagesExclChurchFeePercentage": 34.65,
                     "municipalityTaxPercentage": 23.35,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.5,
                     "churchFeePercentage": 1.02
                  }
               ]
            },
            {
               "municipality": "MARIESTAD",
               "townships": [
                  {
                     "townshipCode": "14 93  12",
                     "township": "LUGNÅS",
                     "sumOfPercentagesInclChurchFeePercentage": 34.49,
                     "sumOfPercentagesExclChurchFeePercentage": 33.14,
                     "municipalityTaxPercentage": 21.26,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.35
                  },
                  {
                     "townshipCode": "14 93  18",
                     "township": "LYRESTAD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.49,
                     "sumOfPercentagesExclChurchFeePercentage": 33.16,
                     "municipalityTaxPercentage": 21.26,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.42,
                     "churchFeePercentage": 1.33
                  },
                  {
                     "townshipCode": "14 93  01",
                     "township": "MARIESTAD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.14,
                     "sumOfPercentagesExclChurchFeePercentage": 33.09,
                     "municipalityTaxPercentage": 21.26,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.05
                  },
                  {
                     "townshipCode": "14 93  03",
                     "township": "ULLERVAD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.49,
                     "sumOfPercentagesExclChurchFeePercentage": 33.14,
                     "municipalityTaxPercentage": 21.26,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.35
                  }
               ]
            },
            {
               "municipality": "MARK",
               "townships": [
                  {
                     "townshipCode": "14 63  07",
                     "township": "FRITSLA-SKEPHULT",
                     "sumOfPercentagesInclChurchFeePercentage": 34.38,
                     "sumOfPercentagesExclChurchFeePercentage": 33.1,
                     "municipalityTaxPercentage": 21.21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.41,
                     "churchFeePercentage": 1.28
                  },
                  {
                     "townshipCode": "14 63  14",
                     "township": "HORRED",
                     "sumOfPercentagesInclChurchFeePercentage": 34.42,
                     "sumOfPercentagesExclChurchFeePercentage": 33.02,
                     "municipalityTaxPercentage": 21.21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.4
                  },
                  {
                     "townshipCode": "14 63  05",
                     "township": "HYSSNA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.27,
                     "sumOfPercentagesExclChurchFeePercentage": 32.97,
                     "municipalityTaxPercentage": 21.21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.3
                  },
                  {
                     "townshipCode": "14 63  15",
                     "township": "ISTORP",
                     "sumOfPercentagesInclChurchFeePercentage": 34.42,
                     "sumOfPercentagesExclChurchFeePercentage": 33.02,
                     "municipalityTaxPercentage": 21.21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.4
                  },
                  {
                     "townshipCode": "14 63  01",
                     "township": "KINNA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.84,
                     "sumOfPercentagesExclChurchFeePercentage": 32.9,
                     "municipalityTaxPercentage": 21.21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.21,
                     "churchFeePercentage": 0.94
                  },
                  {
                     "townshipCode": "14 63  04",
                     "township": "SÄTILA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.27,
                     "sumOfPercentagesExclChurchFeePercentage": 32.97,
                     "municipalityTaxPercentage": 21.21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.3
                  },
                  {
                     "townshipCode": "14 63  17",
                     "township": "TORESTORP",
                     "sumOfPercentagesInclChurchFeePercentage": 34.56,
                     "sumOfPercentagesExclChurchFeePercentage": 33.04,
                     "municipalityTaxPercentage": 21.21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.52
                  },
                  {
                     "townshipCode": "14 63  12",
                     "township": "VÄSTRA MARK",
                     "sumOfPercentagesInclChurchFeePercentage": 34.52,
                     "sumOfPercentagesExclChurchFeePercentage": 33.19,
                     "municipalityTaxPercentage": 21.21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.5,
                     "churchFeePercentage": 1.33
                  },
                  {
                     "townshipCode": "14 63  16",
                     "township": "ÄLEKULLA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.56,
                     "sumOfPercentagesExclChurchFeePercentage": 33.04,
                     "municipalityTaxPercentage": 21.21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.52
                  },
                  {
                     "townshipCode": "14 63  03",
                     "township": "ÖRBY-SKENE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.92,
                     "sumOfPercentagesExclChurchFeePercentage": 32.92,
                     "municipalityTaxPercentage": 21.21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 1
                  },
                  {
                     "townshipCode": "14 63  18",
                     "township": "ÖXABÄCK",
                     "sumOfPercentagesInclChurchFeePercentage": 34.56,
                     "sumOfPercentagesExclChurchFeePercentage": 33.04,
                     "municipalityTaxPercentage": 21.21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.52
                  },
                  {
                     "townshipCode": "14 63  13",
                     "township": "ÖXNEVALLA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.42,
                     "sumOfPercentagesExclChurchFeePercentage": 33.02,
                     "municipalityTaxPercentage": 21.21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.4
                  }
               ]
            },
            {
               "municipality": "MARKARYD",
               "townships": [
                  {
                     "townshipCode": "07 67  02",
                     "township": "HINNERYD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.65,
                     "sumOfPercentagesExclChurchFeePercentage": 33.31,
                     "municipalityTaxPercentage": 21.31,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.34
                  },
                  {
                     "townshipCode": "07 67  01",
                     "township": "MARKARYD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.21,
                     "sumOfPercentagesExclChurchFeePercentage": 33.16,
                     "municipalityTaxPercentage": 21.31,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.05
                  },
                  {
                     "townshipCode": "07 67  03",
                     "township": "TRARYD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.65,
                     "sumOfPercentagesExclChurchFeePercentage": 33.31,
                     "municipalityTaxPercentage": 21.31,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.34
                  }
               ]
            },
            {
               "municipality": "MELLERUD",
               "townships": [
                  {
                     "townshipCode": "14 61  03",
                     "township": "BOLSTAD",
                     "sumOfPercentagesInclChurchFeePercentage": 35.93,
                     "sumOfPercentagesExclChurchFeePercentage": 34.58,
                     "municipalityTaxPercentage": 22.6,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.5,
                     "churchFeePercentage": 1.35
                  },
                  {
                     "townshipCode": "14 61  01",
                     "township": "HOLM",
                     "sumOfPercentagesInclChurchFeePercentage": 35.93,
                     "sumOfPercentagesExclChurchFeePercentage": 34.58,
                     "municipalityTaxPercentage": 22.6,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.5,
                     "churchFeePercentage": 1.35
                  },
                  {
                     "townshipCode": "14 61  09",
                     "township": "SKÅLLERUD",
                     "sumOfPercentagesInclChurchFeePercentage": 35.93,
                     "sumOfPercentagesExclChurchFeePercentage": 34.58,
                     "municipalityTaxPercentage": 22.6,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.5,
                     "churchFeePercentage": 1.35
                  },
                  {
                     "townshipCode": "14 61  07",
                     "township": "ÖR",
                     "sumOfPercentagesInclChurchFeePercentage": 35.93,
                     "sumOfPercentagesExclChurchFeePercentage": 34.58,
                     "municipalityTaxPercentage": 22.6,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.5,
                     "churchFeePercentage": 1.35
                  }
               ]
            },
            {
               "municipality": "MJÖLBY",
               "townships": [
                  {
                     "townshipCode": "05 86  01",
                     "township": "MJÖLBY",
                     "sumOfPercentagesInclChurchFeePercentage": 34.07,
                     "sumOfPercentagesExclChurchFeePercentage": 32.96,
                     "municipalityTaxPercentage": 21.9,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.11
                  },
                  {
                     "townshipCode": "05 86  03",
                     "township": "SKÄNNINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 34.07,
                     "sumOfPercentagesExclChurchFeePercentage": 32.96,
                     "municipalityTaxPercentage": 21.9,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.11
                  },
                  {
                     "townshipCode": "05 86  18",
                     "township": "VETA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.07,
                     "sumOfPercentagesExclChurchFeePercentage": 32.96,
                     "municipalityTaxPercentage": 21.9,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.11
                  },
                  {
                     "townshipCode": "05 86  17",
                     "township": "VIBY",
                     "sumOfPercentagesInclChurchFeePercentage": 34.07,
                     "sumOfPercentagesExclChurchFeePercentage": 32.96,
                     "municipalityTaxPercentage": 21.9,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.11
                  },
                  {
                     "townshipCode": "05 86  12",
                     "township": "VÄDERSTAD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.07,
                     "sumOfPercentagesExclChurchFeePercentage": 32.96,
                     "municipalityTaxPercentage": 21.9,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.11
                  },
                  {
                     "townshipCode": "05 86  14",
                     "township": "VÄSTRA HARG",
                     "sumOfPercentagesInclChurchFeePercentage": 34.07,
                     "sumOfPercentagesExclChurchFeePercentage": 32.96,
                     "municipalityTaxPercentage": 21.9,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.11
                  },
                  {
                     "townshipCode": "05 86  16",
                     "township": "ÖSTRA TOLLSTAD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.07,
                     "sumOfPercentagesExclChurchFeePercentage": 32.96,
                     "municipalityTaxPercentage": 21.9,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.11
                  }
               ]
            },
            {
               "municipality": "MORA",
               "townships": [
                  {
                     "townshipCode": "20 62  01",
                     "township": "MORA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.38,
                     "sumOfPercentagesExclChurchFeePercentage": 34.29,
                     "municipalityTaxPercentage": 22.81,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.09
                  }
               ]
            },
            {
               "municipality": "MOTALA",
               "townships": [
                  {
                     "townshipCode": "05 83  24",
                     "township": "ASKA, DEL",
                     "sumOfPercentagesInclChurchFeePercentage": 33.46,
                     "sumOfPercentagesExclChurchFeePercentage": 32.26,
                     "municipalityTaxPercentage": 21.2,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.2
                  },
                  {
                     "townshipCode": "05 83  06",
                     "township": "BORENSBERG",
                     "sumOfPercentagesInclChurchFeePercentage": 33.46,
                     "sumOfPercentagesExclChurchFeePercentage": 32.26,
                     "municipalityTaxPercentage": 21.2,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.2
                  },
                  {
                     "townshipCode": "05 83  09",
                     "township": "FORNÅSA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.46,
                     "sumOfPercentagesExclChurchFeePercentage": 32.26,
                     "municipalityTaxPercentage": 21.2,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.2
                  },
                  {
                     "townshipCode": "05 83  04",
                     "township": "GODEGÅRD",
                     "sumOfPercentagesInclChurchFeePercentage": 33.46,
                     "sumOfPercentagesExclChurchFeePercentage": 32.26,
                     "municipalityTaxPercentage": 21.2,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.2
                  },
                  {
                     "townshipCode": "05 83  07",
                     "township": "KLOCKRIKE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.46,
                     "sumOfPercentagesExclChurchFeePercentage": 32.26,
                     "municipalityTaxPercentage": 21.2,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.2
                  },
                  {
                     "townshipCode": "05 83  01",
                     "township": "MOTALA",
                     "sumOfPercentagesInclChurchFeePercentage": 32.99,
                     "sumOfPercentagesExclChurchFeePercentage": 32.12,
                     "municipalityTaxPercentage": 21.2,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 0.87
                  },
                  {
                     "townshipCode": "05 83  22",
                     "township": "TJÄLLMO",
                     "sumOfPercentagesInclChurchFeePercentage": 33.46,
                     "sumOfPercentagesExclChurchFeePercentage": 32.26,
                     "municipalityTaxPercentage": 21.2,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.2
                  },
                  {
                     "townshipCode": "05 83  03",
                     "township": "VÄSTRA NY",
                     "sumOfPercentagesInclChurchFeePercentage": 33.46,
                     "sumOfPercentagesExclChurchFeePercentage": 32.26,
                     "municipalityTaxPercentage": 21.2,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.2
                  }
               ]
            },
            {
               "municipality": "MULLSJÖ",
               "townships": [
                  {
                     "townshipCode": "06 42  03",
                     "township": "MULLSJÖ-SANDHEM",
                     "sumOfPercentagesInclChurchFeePercentage": 34.6,
                     "sumOfPercentagesExclChurchFeePercentage": 33.42,
                     "municipalityTaxPercentage": 21.84,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.18
                  }
               ]
            },
            {
               "municipality": "MUNKEDAL",
               "townships": [
                  {
                     "townshipCode": "14 30  01",
                     "township": "FOSS",
                     "sumOfPercentagesInclChurchFeePercentage": 35.79,
                     "sumOfPercentagesExclChurchFeePercentage": 34.61,
                     "municipalityTaxPercentage": 22.68,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.18
                  },
                  {
                     "townshipCode": "14 30  05",
                     "township": "SVARTEBORG-BÄRFENDAL",
                     "sumOfPercentagesInclChurchFeePercentage": 35.79,
                     "sumOfPercentagesExclChurchFeePercentage": 34.61,
                     "municipalityTaxPercentage": 22.68,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.18
                  },
                  {
                     "townshipCode": "14 30  08",
                     "township": "SÖRBYGDEN",
                     "sumOfPercentagesInclChurchFeePercentage": 35.79,
                     "sumOfPercentagesExclChurchFeePercentage": 34.61,
                     "municipalityTaxPercentage": 22.68,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.18
                  }
               ]
            },
            {
               "municipality": "MUNKFORS",
               "townships": [
                  {
                     "townshipCode": "17 62  02",
                     "township": "FORSHAGA-MUNKFORS, DEL",
                     "sumOfPercentagesInclChurchFeePercentage": 35.15,
                     "sumOfPercentagesExclChurchFeePercentage": 34.07,
                     "municipalityTaxPercentage": 22.5,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.37,
                     "churchFeePercentage": 1.08
                  }
               ]
            },
            {
               "municipality": "MÖLNDAL",
               "townships": [
                  {
                     "townshipCode": "14 81  01",
                     "township": "FÄSSBERG",
                     "sumOfPercentagesInclChurchFeePercentage": 32.73,
                     "sumOfPercentagesExclChurchFeePercentage": 31.96,
                     "municipalityTaxPercentage": 20.26,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 0.77
                  },
                  {
                     "townshipCode": "14 81  02",
                     "township": "KÅLLERED",
                     "sumOfPercentagesInclChurchFeePercentage": 32.73,
                     "sumOfPercentagesExclChurchFeePercentage": 31.96,
                     "municipalityTaxPercentage": 20.26,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 0.77
                  },
                  {
                     "townshipCode": "14 81  03",
                     "township": "LINDOME",
                     "sumOfPercentagesInclChurchFeePercentage": 32.51,
                     "sumOfPercentagesExclChurchFeePercentage": 31.84,
                     "municipalityTaxPercentage": 20.26,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.1,
                     "churchFeePercentage": 0.67
                  },
                  {
                     "townshipCode": "14 81  04",
                     "township": "STENSJÖN",
                     "sumOfPercentagesInclChurchFeePercentage": 32.73,
                     "sumOfPercentagesExclChurchFeePercentage": 31.96,
                     "municipalityTaxPercentage": 20.26,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 0.77
                  }
               ]
            },
            {
               "municipality": "MÖNSTERÅS",
               "townships": [
                  {
                     "townshipCode": "08 61  02",
                     "township": "FLISERYD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.07,
                     "sumOfPercentagesExclChurchFeePercentage": 33.1,
                     "municipalityTaxPercentage": 21.41,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 0.97
                  },
                  {
                     "townshipCode": "08 61  01",
                     "township": "MÖNSTERÅS",
                     "sumOfPercentagesInclChurchFeePercentage": 34.07,
                     "sumOfPercentagesExclChurchFeePercentage": 33.1,
                     "municipalityTaxPercentage": 21.41,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 0.97
                  },
                  {
                     "townshipCode": "08 61  03",
                     "township": "ÅLEM",
                     "sumOfPercentagesInclChurchFeePercentage": 34.04,
                     "sumOfPercentagesExclChurchFeePercentage": 33.04,
                     "municipalityTaxPercentage": 21.41,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.26,
                     "churchFeePercentage": 1
                  }
               ]
            },
            {
               "municipality": "MÖRBYLÅNGA",
               "townships": [
                  {
                     "townshipCode": "08 40  14",
                     "township": "ALGUTSRUM",
                     "sumOfPercentagesInclChurchFeePercentage": 34.58,
                     "sumOfPercentagesExclChurchFeePercentage": 33.05,
                     "municipalityTaxPercentage": 21.41,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.53
                  },
                  {
                     "townshipCode": "08 40  13",
                     "township": "GLÖMMINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 34.58,
                     "sumOfPercentagesExclChurchFeePercentage": 33.05,
                     "municipalityTaxPercentage": 21.41,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.53
                  },
                  {
                     "townshipCode": "08 40  05",
                     "township": "HULTERSTAD-STENÅSA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.58,
                     "sumOfPercentagesExclChurchFeePercentage": 33.05,
                     "municipalityTaxPercentage": 21.41,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.53
                  },
                  {
                     "townshipCode": "08 40  03",
                     "township": "MÖRBYLÅNGA-KASTLÖSA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.58,
                     "sumOfPercentagesExclChurchFeePercentage": 33.05,
                     "municipalityTaxPercentage": 21.41,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.53
                  },
                  {
                     "townshipCode": "08 40  16",
                     "township": "NORRA MÖCKLEBY, SANDBY OCH GÅRDBY",
                     "sumOfPercentagesInclChurchFeePercentage": 34.58,
                     "sumOfPercentagesExclChurchFeePercentage": 33.05,
                     "municipalityTaxPercentage": 21.41,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.53
                  },
                  {
                     "townshipCode": "08 40  01",
                     "township": "RESMO-VICKLEBY",
                     "sumOfPercentagesInclChurchFeePercentage": 34.58,
                     "sumOfPercentagesExclChurchFeePercentage": 33.05,
                     "municipalityTaxPercentage": 21.41,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.53
                  },
                  {
                     "townshipCode": "08 40  08",
                     "township": "SYDÖLAND",
                     "sumOfPercentagesInclChurchFeePercentage": 34.58,
                     "sumOfPercentagesExclChurchFeePercentage": 33.05,
                     "municipalityTaxPercentage": 21.41,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.53
                  },
                  {
                     "townshipCode": "08 40  15",
                     "township": "TORSLUNDA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.58,
                     "sumOfPercentagesExclChurchFeePercentage": 33.05,
                     "municipalityTaxPercentage": 21.41,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.53
                  }
               ]
            },
            {
               "municipality": "NACKA",
               "townships": [
                  {
                     "townshipCode": "01 82  03",
                     "township": "BOO",
                     "sumOfPercentagesInclChurchFeePercentage": 31.65,
                     "sumOfPercentagesExclChurchFeePercentage": 30.86,
                     "municipalityTaxPercentage": 18.61,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.15,
                     "churchFeePercentage": 0.79
                  },
                  {
                     "townshipCode": "01 82  01",
                     "township": "NACKA",
                     "sumOfPercentagesInclChurchFeePercentage": 31.57,
                     "sumOfPercentagesExclChurchFeePercentage": 30.87,
                     "municipalityTaxPercentage": 18.61,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.16,
                     "churchFeePercentage": 0.7
                  },
                  {
                     "townshipCode": "01 82  02",
                     "township": "SALTSJÖBADEN",
                     "sumOfPercentagesInclChurchFeePercentage": 31.75,
                     "sumOfPercentagesExclChurchFeePercentage": 30.87,
                     "municipalityTaxPercentage": 18.61,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.16,
                     "churchFeePercentage": 0.88
                  }
               ]
            },
            {
               "municipality": "NORA",
               "townships": [
                  {
                     "townshipCode": "18 84  04",
                     "township": "NORA BERGSLAGSFÖRS.",
                     "sumOfPercentagesInclChurchFeePercentage": 35.06,
                     "sumOfPercentagesExclChurchFeePercentage": 33.73,
                     "municipalityTaxPercentage": 21.75,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.33
                  }
               ]
            },
            {
               "municipality": "NORBERG",
               "townships": [
                  {
                     "townshipCode": "19 62  01",
                     "township": "NORBERG-KARBENNING",
                     "sumOfPercentagesInclChurchFeePercentage": 35.16,
                     "sumOfPercentagesExclChurchFeePercentage": 33.87,
                     "municipalityTaxPercentage": 22.66,
                     "countyTaxPercentage": 10.88,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.29
                  }
               ]
            },
            {
               "municipality": "NORDANSTIG",
               "townships": [
                  {
                     "townshipCode": "21 32  05",
                     "township": "BERGSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.6,
                     "sumOfPercentagesExclChurchFeePercentage": 34.49,
                     "municipalityTaxPercentage": 22.51,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.47,
                     "churchFeePercentage": 1.11
                  },
                  {
                     "townshipCode": "21 32  04",
                     "township": "GNARP",
                     "sumOfPercentagesInclChurchFeePercentage": 35.58,
                     "sumOfPercentagesExclChurchFeePercentage": 34.37,
                     "municipalityTaxPercentage": 22.51,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.21
                  },
                  {
                     "townshipCode": "21 32  02",
                     "township": "HARMÅNGER-JÄTTENDAL",
                     "sumOfPercentagesInclChurchFeePercentage": 35.58,
                     "sumOfPercentagesExclChurchFeePercentage": 34.37,
                     "municipalityTaxPercentage": 22.51,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.21
                  }
               ]
            },
            {
               "municipality": "NORDMALING",
               "townships": [
                  {
                     "townshipCode": "24 01  02",
                     "township": "NORDMALING",
                     "sumOfPercentagesInclChurchFeePercentage": 35.4,
                     "sumOfPercentagesExclChurchFeePercentage": 34.4,
                     "municipalityTaxPercentage": 23.25,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1
                  }
               ]
            },
            {
               "municipality": "NORRKÖPING",
               "townships": [
                  {
                     "townshipCode": "05 81  27",
                     "township": "JONSBERG",
                     "sumOfPercentagesInclChurchFeePercentage": 33.85,
                     "sumOfPercentagesExclChurchFeePercentage": 32.27,
                     "municipalityTaxPercentage": 21.25,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.58
                  },
                  {
                     "townshipCode": "05 81  04",
                     "township": "KOLMÅRDEN",
                     "sumOfPercentagesInclChurchFeePercentage": 33.12,
                     "sumOfPercentagesExclChurchFeePercentage": 32.15,
                     "municipalityTaxPercentage": 21.25,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 0.97
                  },
                  {
                     "townshipCode": "05 81  05",
                     "township": "NORRKÖPINGS BORG",
                     "sumOfPercentagesInclChurchFeePercentage": 33.12,
                     "sumOfPercentagesExclChurchFeePercentage": 32.15,
                     "municipalityTaxPercentage": 21.25,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 0.97
                  },
                  {
                     "townshipCode": "05 81  06",
                     "township": "NORRKÖPINGS S:T JOHANNES",
                     "sumOfPercentagesInclChurchFeePercentage": 33.12,
                     "sumOfPercentagesExclChurchFeePercentage": 32.15,
                     "municipalityTaxPercentage": 21.25,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 0.97
                  },
                  {
                     "townshipCode": "05 81  02",
                     "township": "NORRKÖPINGS S:T OLOF",
                     "sumOfPercentagesInclChurchFeePercentage": 33.12,
                     "sumOfPercentagesExclChurchFeePercentage": 32.15,
                     "municipalityTaxPercentage": 21.25,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 0.97
                  },
                  {
                     "townshipCode": "05 81  19",
                     "township": "VÄSTRA VIKBOLANDET",
                     "sumOfPercentagesInclChurchFeePercentage": 33.7,
                     "sumOfPercentagesExclChurchFeePercentage": 32.28,
                     "municipalityTaxPercentage": 21.25,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.42
                  },
                  {
                     "townshipCode": "05 81  25",
                     "township": "ÖSTRA HUSBY",
                     "sumOfPercentagesInclChurchFeePercentage": 33.85,
                     "sumOfPercentagesExclChurchFeePercentage": 32.27,
                     "municipalityTaxPercentage": 21.25,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.58
                  }
               ]
            },
            {
               "municipality": "NORRTÄLJE",
               "townships": [
                  {
                     "townshipCode": "01 88  24",
                     "township": "BLIDÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 33.11,
                     "sumOfPercentagesExclChurchFeePercentage": 32.09,
                     "municipalityTaxPercentage": 19.72,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.02
                  },
                  {
                     "townshipCode": "01 88  08",
                     "township": "EDSBRO-UNUNGE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.41,
                     "sumOfPercentagesExclChurchFeePercentage": 32.25,
                     "municipalityTaxPercentage": 19.72,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.16
                  },
                  {
                     "townshipCode": "01 88  18",
                     "township": "ESTUNA OCH SÖDERBY-KARL",
                     "sumOfPercentagesInclChurchFeePercentage": 33.41,
                     "sumOfPercentagesExclChurchFeePercentage": 32.25,
                     "municipalityTaxPercentage": 19.72,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.16
                  },
                  {
                     "townshipCode": "01 88  09",
                     "township": "FASTERNA",
                     "sumOfPercentagesInclChurchFeePercentage": 32.96,
                     "sumOfPercentagesExclChurchFeePercentage": 32.1,
                     "municipalityTaxPercentage": 19.72,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 0.86
                  },
                  {
                     "townshipCode": "01 88  23",
                     "township": "FRÖTUNA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.38,
                     "sumOfPercentagesExclChurchFeePercentage": 32.01,
                     "municipalityTaxPercentage": 19.72,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.19,
                     "churchFeePercentage": 1.37
                  },
                  {
                     "townshipCode": "01 88  14",
                     "township": "GOTTRÖRA",
                     "sumOfPercentagesInclChurchFeePercentage": 32.96,
                     "sumOfPercentagesExclChurchFeePercentage": 32.1,
                     "municipalityTaxPercentage": 19.72,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 0.86
                  },
                  {
                     "townshipCode": "01 88  12",
                     "township": "HUSBY, SKEDERID OCH RÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 32.96,
                     "sumOfPercentagesExclChurchFeePercentage": 32.1,
                     "municipalityTaxPercentage": 19.72,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 0.86
                  },
                  {
                     "townshipCode": "01 88  05",
                     "township": "HÄVERÖ-EDEBO-SINGÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 33.422,
                     "sumOfPercentagesExclChurchFeePercentage": 32.14,
                     "municipalityTaxPercentage": 19.72,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.282
                  },
                  {
                     "townshipCode": "01 88  17",
                     "township": "LOHÄRAD",
                     "sumOfPercentagesInclChurchFeePercentage": 33.41,
                     "sumOfPercentagesExclChurchFeePercentage": 32.25,
                     "municipalityTaxPercentage": 19.72,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.16
                  },
                  {
                     "townshipCode": "01 88  25",
                     "township": "LÄNNA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.11,
                     "sumOfPercentagesExclChurchFeePercentage": 32.09,
                     "municipalityTaxPercentage": 19.72,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.02
                  },
                  {
                     "townshipCode": "01 88  01",
                     "township": "NORRTÄLJE-MALSTA",
                     "sumOfPercentagesInclChurchFeePercentage": 32.795,
                     "sumOfPercentagesExclChurchFeePercentage": 32.005,
                     "municipalityTaxPercentage": 19.72,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.185,
                     "churchFeePercentage": 0.79
                  },
                  {
                     "townshipCode": "01 88  15",
                     "township": "NÄRTUNA",
                     "sumOfPercentagesInclChurchFeePercentage": 32.96,
                     "sumOfPercentagesExclChurchFeePercentage": 32.1,
                     "municipalityTaxPercentage": 19.72,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 0.86
                  },
                  {
                     "townshipCode": "01 88  26",
                     "township": "RIALA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.11,
                     "sumOfPercentagesExclChurchFeePercentage": 32.09,
                     "municipalityTaxPercentage": 19.72,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.02
                  },
                  {
                     "townshipCode": "01 88  10",
                     "township": "RIMBO",
                     "sumOfPercentagesInclChurchFeePercentage": 32.96,
                     "sumOfPercentagesExclChurchFeePercentage": 32.1,
                     "municipalityTaxPercentage": 19.72,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 0.86
                  },
                  {
                     "townshipCode": "01 88  20",
                     "township": "ROSLAGSBRO-VÄTÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 33.4,
                     "sumOfPercentagesExclChurchFeePercentage": 32.14,
                     "municipalityTaxPercentage": 19.72,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.26
                  },
                  {
                     "townshipCode": "01 88  22",
                     "township": "RÅDMANSÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 33.38,
                     "sumOfPercentagesExclChurchFeePercentage": 32.01,
                     "municipalityTaxPercentage": 19.72,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.19,
                     "churchFeePercentage": 1.37
                  },
                  {
                     "townshipCode": "01 88  03",
                     "township": "VÄDDÖ OCH BJÖRKÖ-ARHOLMA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.36,
                     "sumOfPercentagesExclChurchFeePercentage": 32.04,
                     "municipalityTaxPercentage": 19.72,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 1.32
                  }
               ]
            },
            {
               "municipality": "NORSJÖ",
               "townships": [
                  {
                     "townshipCode": "24 17  02",
                     "township": "NORSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.56,
                     "sumOfPercentagesExclChurchFeePercentage": 34.56,
                     "municipalityTaxPercentage": 23.35,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.41,
                     "churchFeePercentage": 1
                  }
               ]
            },
            {
               "municipality": "NYBRO",
               "townships": [
                  {
                     "townshipCode": "08 81  03",
                     "township": "BÄCKEBO",
                     "sumOfPercentagesInclChurchFeePercentage": 34.66,
                     "sumOfPercentagesExclChurchFeePercentage": 33.49,
                     "municipalityTaxPercentage": 21.83,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.17
                  },
                  {
                     "townshipCode": "08 81  09",
                     "township": "HÄLLEBERGA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.66,
                     "sumOfPercentagesExclChurchFeePercentage": 33.49,
                     "municipalityTaxPercentage": 21.83,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.17
                  },
                  {
                     "townshipCode": "08 81  04",
                     "township": "KRISTVALLA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.66,
                     "sumOfPercentagesExclChurchFeePercentage": 33.49,
                     "municipalityTaxPercentage": 21.83,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.17
                  },
                  {
                     "townshipCode": "08 81  02",
                     "township": "KRÅKSMÅLA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.66,
                     "sumOfPercentagesExclChurchFeePercentage": 33.49,
                     "municipalityTaxPercentage": 21.83,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.17
                  },
                  {
                     "townshipCode": "08 81  05",
                     "township": "MADESJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.66,
                     "sumOfPercentagesExclChurchFeePercentage": 33.49,
                     "municipalityTaxPercentage": 21.83,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.17
                  },
                  {
                     "townshipCode": "08 81  01",
                     "township": "NYBRO-S:T SIGFRID",
                     "sumOfPercentagesInclChurchFeePercentage": 34.66,
                     "sumOfPercentagesExclChurchFeePercentage": 33.49,
                     "municipalityTaxPercentage": 21.83,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.17
                  },
                  {
                     "townshipCode": "08 81  08",
                     "township": "OSKAR",
                     "sumOfPercentagesInclChurchFeePercentage": 34.66,
                     "sumOfPercentagesExclChurchFeePercentage": 33.49,
                     "municipalityTaxPercentage": 21.83,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.17
                  },
                  {
                     "townshipCode": "08 81  06",
                     "township": "ÖRSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.66,
                     "sumOfPercentagesExclChurchFeePercentage": 33.49,
                     "municipalityTaxPercentage": 21.83,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.17
                  }
               ]
            },
            {
               "municipality": "NYKVARN",
               "townships": [
                  {
                     "townshipCode": "01 40  01",
                     "township": "TURINGE-TAXINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.33,
                     "sumOfPercentagesExclChurchFeePercentage": 32.26,
                     "municipalityTaxPercentage": 19.95,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.21,
                     "churchFeePercentage": 1.07
                  }
               ]
            },
            {
               "municipality": "NYKÖPING",
               "townships": [
                  {
                     "townshipCode": "04 80  07",
                     "township": "KILADALEN",
                     "sumOfPercentagesInclChurchFeePercentage": 33.79,
                     "sumOfPercentagesExclChurchFeePercentage": 32.53,
                     "municipalityTaxPercentage": 21.48,
                     "countyTaxPercentage": 10.77,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.26
                  },
                  {
                     "townshipCode": "04 80  02",
                     "township": "NYKÖPING",
                     "sumOfPercentagesInclChurchFeePercentage": 33.66,
                     "sumOfPercentagesExclChurchFeePercentage": 32.47,
                     "municipalityTaxPercentage": 21.48,
                     "countyTaxPercentage": 10.77,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 1.19
                  },
                  {
                     "townshipCode": "04 80  19",
                     "township": "RÖNÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.07,
                     "sumOfPercentagesExclChurchFeePercentage": 32.7,
                     "municipalityTaxPercentage": 21.48,
                     "countyTaxPercentage": 10.77,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.37
                  },
                  {
                     "townshipCode": "04 80  10",
                     "township": "STIGTOMTA-VRENA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.84,
                     "sumOfPercentagesExclChurchFeePercentage": 32.52,
                     "municipalityTaxPercentage": 21.48,
                     "countyTaxPercentage": 10.77,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.32
                  },
                  {
                     "townshipCode": "04 80  05",
                     "township": "TUNABERG",
                     "sumOfPercentagesInclChurchFeePercentage": 33.99,
                     "sumOfPercentagesExclChurchFeePercentage": 32.61,
                     "municipalityTaxPercentage": 21.48,
                     "countyTaxPercentage": 10.77,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.38
                  },
                  {
                     "townshipCode": "04 80  20",
                     "township": "TYSTBERGABYGDEN",
                     "sumOfPercentagesInclChurchFeePercentage": 34.09,
                     "sumOfPercentagesExclChurchFeePercentage": 32.65,
                     "municipalityTaxPercentage": 21.48,
                     "countyTaxPercentage": 10.77,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.44
                  }
               ]
            },
            {
               "municipality": "NYNÄSHAMN",
               "townships": [
                  {
                     "townshipCode": "01 92  01",
                     "township": "NYNÄSHAMN",
                     "sumOfPercentagesInclChurchFeePercentage": 33,
                     "sumOfPercentagesExclChurchFeePercentage": 32.18,
                     "municipalityTaxPercentage": 19.83,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 0.82
                  },
                  {
                     "townshipCode": "01 92  02",
                     "township": "SORUNDA",
                     "sumOfPercentagesInclChurchFeePercentage": 32.88,
                     "sumOfPercentagesExclChurchFeePercentage": 32.11,
                     "municipalityTaxPercentage": 19.83,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.18,
                     "churchFeePercentage": 0.77
                  },
                  {
                     "townshipCode": "01 92  04",
                     "township": "ÖSMO-TORÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 33.22,
                     "sumOfPercentagesExclChurchFeePercentage": 32.15,
                     "municipalityTaxPercentage": 19.83,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 1.07
                  }
               ]
            },
            {
               "municipality": "NÄSSJÖ",
               "townships": [
                  {
                     "townshipCode": "06 82  10",
                     "township": "ALMESÅKRA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.65,
                     "sumOfPercentagesExclChurchFeePercentage": 33.75,
                     "municipalityTaxPercentage": 22.19,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 0.9
                  },
                  {
                     "townshipCode": "06 82  07",
                     "township": "BARKERYD-FORSERUM",
                     "sumOfPercentagesInclChurchFeePercentage": 34.65,
                     "sumOfPercentagesExclChurchFeePercentage": 33.75,
                     "municipalityTaxPercentage": 22.19,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 0.9
                  },
                  {
                     "townshipCode": "06 82  04",
                     "township": "BRINGETOFTA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.65,
                     "sumOfPercentagesExclChurchFeePercentage": 33.75,
                     "municipalityTaxPercentage": 22.19,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 0.9
                  },
                  {
                     "townshipCode": "06 82  09",
                     "township": "MALMBÄCK",
                     "sumOfPercentagesInclChurchFeePercentage": 34.65,
                     "sumOfPercentagesExclChurchFeePercentage": 33.75,
                     "municipalityTaxPercentage": 22.19,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 0.9
                  },
                  {
                     "townshipCode": "06 82  03",
                     "township": "NORRA SANDSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.65,
                     "sumOfPercentagesExclChurchFeePercentage": 33.75,
                     "municipalityTaxPercentage": 22.19,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 0.9
                  },
                  {
                     "townshipCode": "06 82  05",
                     "township": "NORRA SOLBERGA-FLISBY",
                     "sumOfPercentagesInclChurchFeePercentage": 35.2,
                     "sumOfPercentagesExclChurchFeePercentage": 33.8,
                     "municipalityTaxPercentage": 22.19,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.4
                  },
                  {
                     "townshipCode": "06 82  01",
                     "township": "NÄSSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.65,
                     "sumOfPercentagesExclChurchFeePercentage": 33.75,
                     "municipalityTaxPercentage": 22.19,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 0.9
                  }
               ]
            },
            {
               "municipality": "OCKELBO",
               "townships": [
                  {
                     "townshipCode": "21 01  02",
                     "township": "OCKELBO",
                     "sumOfPercentagesInclChurchFeePercentage": 35.76,
                     "sumOfPercentagesExclChurchFeePercentage": 34.6,
                     "municipalityTaxPercentage": 22.76,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.16
                  }
               ]
            },
            {
               "municipality": "OLOFSTRÖM",
               "townships": [
                  {
                     "townshipCode": "10 60  02",
                     "township": "JÄMSHÖG",
                     "sumOfPercentagesInclChurchFeePercentage": 34.78,
                     "sumOfPercentagesExclChurchFeePercentage": 33.6,
                     "municipalityTaxPercentage": 22.16,
                     "countyTaxPercentage": 11.19,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.18
                  },
                  {
                     "townshipCode": "10 60  03",
                     "township": "KYRKHULT",
                     "sumOfPercentagesInclChurchFeePercentage": 34.88,
                     "sumOfPercentagesExclChurchFeePercentage": 33.73,
                     "municipalityTaxPercentage": 22.16,
                     "countyTaxPercentage": 11.19,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.15
                  }
               ]
            },
            {
               "municipality": "ORSA",
               "townships": [
                  {
                     "townshipCode": "20 34  02",
                     "township": "ORSA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.58,
                     "sumOfPercentagesExclChurchFeePercentage": 34.45,
                     "municipalityTaxPercentage": 22.89,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.13
                  }
               ]
            },
            {
               "municipality": "ORUST",
               "townships": [
                  {
                     "townshipCode": "14 21  04",
                     "township": "LÅNGELANDA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.78,
                     "sumOfPercentagesExclChurchFeePercentage": 34.49,
                     "municipalityTaxPercentage": 22.71,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.29
                  },
                  {
                     "townshipCode": "14 21  10",
                     "township": "MORLANDA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.78,
                     "sumOfPercentagesExclChurchFeePercentage": 34.49,
                     "municipalityTaxPercentage": 22.71,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.29
                  },
                  {
                     "townshipCode": "14 21  05",
                     "township": "MYCKLEBY",
                     "sumOfPercentagesInclChurchFeePercentage": 35.78,
                     "sumOfPercentagesExclChurchFeePercentage": 34.49,
                     "municipalityTaxPercentage": 22.71,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.29
                  },
                  {
                     "townshipCode": "14 21  02",
                     "township": "RÖRA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.78,
                     "sumOfPercentagesExclChurchFeePercentage": 34.49,
                     "municipalityTaxPercentage": 22.71,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.29
                  },
                  {
                     "townshipCode": "14 21  03",
                     "township": "STALA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.78,
                     "sumOfPercentagesExclChurchFeePercentage": 34.49,
                     "municipalityTaxPercentage": 22.71,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.29
                  },
                  {
                     "townshipCode": "14 21  01",
                     "township": "TEGNEBY",
                     "sumOfPercentagesInclChurchFeePercentage": 35.78,
                     "sumOfPercentagesExclChurchFeePercentage": 34.49,
                     "municipalityTaxPercentage": 22.71,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.29
                  },
                  {
                     "townshipCode": "14 21  06",
                     "township": "TORP",
                     "sumOfPercentagesInclChurchFeePercentage": 35.78,
                     "sumOfPercentagesExclChurchFeePercentage": 34.49,
                     "municipalityTaxPercentage": 22.71,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.29
                  }
               ]
            },
            {
               "municipality": "OSBY",
               "townships": [
                  {
                     "townshipCode": "12 73  03",
                     "township": "LOSHULT",
                     "sumOfPercentagesInclChurchFeePercentage": 34.06,
                     "sumOfPercentagesExclChurchFeePercentage": 33.16,
                     "municipalityTaxPercentage": 22.26,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.21,
                     "churchFeePercentage": 0.9
                  },
                  {
                     "townshipCode": "12 73  01",
                     "township": "OSBY-VISSELTOFTA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.06,
                     "sumOfPercentagesExclChurchFeePercentage": 33.16,
                     "municipalityTaxPercentage": 22.26,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.21,
                     "churchFeePercentage": 0.9
                  },
                  {
                     "townshipCode": "12 73  02",
                     "township": "ÖRKENED",
                     "sumOfPercentagesInclChurchFeePercentage": 34.36,
                     "sumOfPercentagesExclChurchFeePercentage": 33.32,
                     "municipalityTaxPercentage": 22.26,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.37,
                     "churchFeePercentage": 1.04
                  }
               ]
            },
            {
               "municipality": "OSKARSHAMN",
               "townships": [
                  {
                     "townshipCode": "08 82  05",
                     "township": "DÖDERHULT",
                     "sumOfPercentagesInclChurchFeePercentage": 34.33,
                     "sumOfPercentagesExclChurchFeePercentage": 33.13,
                     "municipalityTaxPercentage": 21.51,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.2
                  },
                  {
                     "townshipCode": "08 82  03",
                     "township": "MISTERHULT",
                     "sumOfPercentagesInclChurchFeePercentage": 34.54,
                     "sumOfPercentagesExclChurchFeePercentage": 33.24,
                     "municipalityTaxPercentage": 21.51,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.3
                  },
                  {
                     "townshipCode": "08 82  01",
                     "township": "OSKARSHAMN",
                     "sumOfPercentagesInclChurchFeePercentage": 33.93,
                     "sumOfPercentagesExclChurchFeePercentage": 33.1,
                     "municipalityTaxPercentage": 21.51,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 0.83
                  }
               ]
            },
            {
               "municipality": "OVANÅKER",
               "townships": [
                  {
                     "townshipCode": "21 21  01",
                     "township": "ALFTA-OVANÅKER",
                     "sumOfPercentagesInclChurchFeePercentage": 34.95,
                     "sumOfPercentagesExclChurchFeePercentage": 33.74,
                     "municipalityTaxPercentage": 21.86,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.37,
                     "churchFeePercentage": 1.21
                  }
               ]
            },
            {
               "municipality": "OXELÖSUND",
               "townships": [
                  {
                     "townshipCode": "04 81  01",
                     "township": "OXELÖSUND",
                     "sumOfPercentagesInclChurchFeePercentage": 34.34,
                     "sumOfPercentagesExclChurchFeePercentage": 33.33,
                     "municipalityTaxPercentage": 22.28,
                     "countyTaxPercentage": 10.77,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.01
                  }
               ]
            },
            {
               "municipality": "PAJALA",
               "townships": [
                  {
                     "townshipCode": "25 21  01",
                     "township": "PAJALA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.48,
                     "sumOfPercentagesExclChurchFeePercentage": 34.211,
                     "municipalityTaxPercentage": 23.5,
                     "countyTaxPercentage": 10.18,
                     "funeralFeePercentage": 0.531,
                     "churchFeePercentage": 1.269
                  }
               ]
            },
            {
               "municipality": "PARTILLE",
               "townships": [
                  {
                     "townshipCode": "14 02  04",
                     "township": "FURULUND",
                     "sumOfPercentagesInclChurchFeePercentage": 32.64,
                     "sumOfPercentagesExclChurchFeePercentage": 31.62,
                     "municipalityTaxPercentage": 19.96,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.18,
                     "churchFeePercentage": 1.02
                  },
                  {
                     "townshipCode": "14 02  01",
                     "township": "PARTILLE",
                     "sumOfPercentagesInclChurchFeePercentage": 32.64,
                     "sumOfPercentagesExclChurchFeePercentage": 31.62,
                     "municipalityTaxPercentage": 19.96,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.18,
                     "churchFeePercentage": 1.02
                  },
                  {
                     "townshipCode": "14 02  03",
                     "township": "SÄVEDALEN",
                     "sumOfPercentagesInclChurchFeePercentage": 32.64,
                     "sumOfPercentagesExclChurchFeePercentage": 31.62,
                     "municipalityTaxPercentage": 19.96,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.18,
                     "churchFeePercentage": 1.02
                  }
               ]
            },
            {
               "municipality": "PERSTORP",
               "townships": [
                  {
                     "townshipCode": "12 75  01",
                     "township": "PERSTORP",
                     "sumOfPercentagesInclChurchFeePercentage": 32.92,
                     "sumOfPercentagesExclChurchFeePercentage": 31.82,
                     "municipalityTaxPercentage": 20.81,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.1
                  }
               ]
            },
            {
               "municipality": "PITEÅ",
               "townships": [
                  {
                     "townshipCode": "25 81  02",
                     "township": "HORTLAX",
                     "sumOfPercentagesInclChurchFeePercentage": 33.63,
                     "sumOfPercentagesExclChurchFeePercentage": 32.73,
                     "municipalityTaxPercentage": 22.25,
                     "countyTaxPercentage": 10.18,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 0.9
                  },
                  {
                     "townshipCode": "25 81  05",
                     "township": "NORRFJÄRDEN",
                     "sumOfPercentagesInclChurchFeePercentage": 33.79,
                     "sumOfPercentagesExclChurchFeePercentage": 32.76,
                     "municipalityTaxPercentage": 22.25,
                     "countyTaxPercentage": 10.18,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.03
                  },
                  {
                     "townshipCode": "25 81  03",
                     "township": "PITEÅ",
                     "sumOfPercentagesInclChurchFeePercentage": 33.66,
                     "sumOfPercentagesExclChurchFeePercentage": 32.74,
                     "municipalityTaxPercentage": 22.25,
                     "countyTaxPercentage": 10.18,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 0.92
                  }
               ]
            },
            {
               "municipality": "RAGUNDA",
               "townships": [
                  {
                     "townshipCode": "23 03  03",
                     "township": "BORGVATTNET",
                     "sumOfPercentagesInclChurchFeePercentage": 36.12,
                     "sumOfPercentagesExclChurchFeePercentage": 34.96,
                     "municipalityTaxPercentage": 23.22,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.54,
                     "churchFeePercentage": 1.16
                  },
                  {
                     "townshipCode": "23 03  02",
                     "township": "FORS",
                     "sumOfPercentagesInclChurchFeePercentage": 36.24,
                     "sumOfPercentagesExclChurchFeePercentage": 34.94,
                     "municipalityTaxPercentage": 23.22,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.52,
                     "churchFeePercentage": 1.3
                  },
                  {
                     "townshipCode": "23 03  01",
                     "township": "RAGUNDA",
                     "sumOfPercentagesInclChurchFeePercentage": 36.15,
                     "sumOfPercentagesExclChurchFeePercentage": 35,
                     "municipalityTaxPercentage": 23.22,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.58,
                     "churchFeePercentage": 1.15
                  },
                  {
                     "townshipCode": "23 03  04",
                     "township": "STUGUN",
                     "sumOfPercentagesInclChurchFeePercentage": 36.12,
                     "sumOfPercentagesExclChurchFeePercentage": 34.96,
                     "municipalityTaxPercentage": 23.22,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.54,
                     "churchFeePercentage": 1.16
                  }
               ]
            },
            {
               "municipality": "ROBERTSFORS",
               "townships": [
                  {
                     "townshipCode": "24 09  01",
                     "township": "BYGDEÅ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.36,
                     "sumOfPercentagesExclChurchFeePercentage": 34.26,
                     "municipalityTaxPercentage": 23.1,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.1
                  }
               ]
            },
            {
               "municipality": "RONNEBY",
               "townships": [
                  {
                     "townshipCode": "10 81  10",
                     "township": "BRÄKNE-HOBY",
                     "sumOfPercentagesInclChurchFeePercentage": 35.03,
                     "sumOfPercentagesExclChurchFeePercentage": 33.91,
                     "municipalityTaxPercentage": 22.36,
                     "countyTaxPercentage": 11.19,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "10 81  01",
                     "township": "RONNEBY",
                     "sumOfPercentagesInclChurchFeePercentage": 35.03,
                     "sumOfPercentagesExclChurchFeePercentage": 33.91,
                     "municipalityTaxPercentage": 22.36,
                     "countyTaxPercentage": 11.19,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.12
                  }
               ]
            },
            {
               "municipality": "RÄTTVIK",
               "townships": [
                  {
                     "townshipCode": "20 31  03",
                     "township": "BODA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.13,
                     "sumOfPercentagesExclChurchFeePercentage": 33.81,
                     "municipalityTaxPercentage": 22.29,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.32
                  },
                  {
                     "townshipCode": "20 31  04",
                     "township": "ORE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.13,
                     "sumOfPercentagesExclChurchFeePercentage": 33.81,
                     "municipalityTaxPercentage": 22.29,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.32
                  },
                  {
                     "townshipCode": "20 31  01",
                     "township": "RÄTTVIK",
                     "sumOfPercentagesInclChurchFeePercentage": 35.13,
                     "sumOfPercentagesExclChurchFeePercentage": 33.81,
                     "municipalityTaxPercentage": 22.29,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.32
                  }
               ]
            },
            {
               "municipality": "SALA",
               "townships": [
                  {
                     "townshipCode": "19 81  07",
                     "township": "KILA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.85,
                     "sumOfPercentagesExclChurchFeePercentage": 33.43,
                     "municipalityTaxPercentage": 22.31,
                     "countyTaxPercentage": 10.88,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1.42
                  },
                  {
                     "townshipCode": "19 81  06",
                     "township": "KUMLA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.85,
                     "sumOfPercentagesExclChurchFeePercentage": 33.43,
                     "municipalityTaxPercentage": 22.31,
                     "countyTaxPercentage": 10.88,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1.42
                  },
                  {
                     "townshipCode": "19 81  08",
                     "township": "MÖKLINTA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.38,
                     "sumOfPercentagesExclChurchFeePercentage": 33.4,
                     "municipalityTaxPercentage": 22.31,
                     "countyTaxPercentage": 10.88,
                     "funeralFeePercentage": 0.21,
                     "churchFeePercentage": 0.98
                  },
                  {
                     "townshipCode": "19 81  04",
                     "township": "NORRBY",
                     "sumOfPercentagesInclChurchFeePercentage": 34.38,
                     "sumOfPercentagesExclChurchFeePercentage": 33.4,
                     "municipalityTaxPercentage": 22.31,
                     "countyTaxPercentage": 10.88,
                     "funeralFeePercentage": 0.21,
                     "churchFeePercentage": 0.98
                  },
                  {
                     "townshipCode": "19 81  01",
                     "township": "SALA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.38,
                     "sumOfPercentagesExclChurchFeePercentage": 33.4,
                     "municipalityTaxPercentage": 22.31,
                     "countyTaxPercentage": 10.88,
                     "funeralFeePercentage": 0.21,
                     "churchFeePercentage": 0.98
                  },
                  {
                     "townshipCode": "19 81  05",
                     "township": "TÄRNA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.85,
                     "sumOfPercentagesExclChurchFeePercentage": 33.43,
                     "municipalityTaxPercentage": 22.31,
                     "countyTaxPercentage": 10.88,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1.42
                  },
                  {
                     "townshipCode": "19 81  02",
                     "township": "VÄSTERFÄRNEBO-FLÄCKEBO",
                     "sumOfPercentagesInclChurchFeePercentage": 35.05,
                     "sumOfPercentagesExclChurchFeePercentage": 33.56,
                     "municipalityTaxPercentage": 22.31,
                     "countyTaxPercentage": 10.88,
                     "funeralFeePercentage": 0.37,
                     "churchFeePercentage": 1.49
                  }
               ]
            },
            {
               "municipality": "SALEM",
               "townships": [
                  {
                     "townshipCode": "01 28  01",
                     "township": "SALEM",
                     "sumOfPercentagesInclChurchFeePercentage": 32.929,
                     "sumOfPercentagesExclChurchFeePercentage": 32.09,
                     "municipalityTaxPercentage": 19.9,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.09,
                     "churchFeePercentage": 0.839
                  }
               ]
            },
            {
               "municipality": "SANDVIKEN",
               "townships": [
                  {
                     "townshipCode": "21 81  03",
                     "township": "JÄRBO",
                     "sumOfPercentagesInclChurchFeePercentage": 34.51,
                     "sumOfPercentagesExclChurchFeePercentage": 33.32,
                     "municipalityTaxPercentage": 21.61,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 1.19
                  },
                  {
                     "townshipCode": "21 81  02",
                     "township": "OVANSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.51,
                     "sumOfPercentagesExclChurchFeePercentage": 33.32,
                     "municipalityTaxPercentage": 21.61,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 1.19
                  },
                  {
                     "townshipCode": "21 81  01",
                     "township": "SANDVIKEN",
                     "sumOfPercentagesInclChurchFeePercentage": 34.51,
                     "sumOfPercentagesExclChurchFeePercentage": 33.39,
                     "municipalityTaxPercentage": 21.61,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "21 81  04",
                     "township": "ÅRSUNDA-ÖSTERFÄRNEBO",
                     "sumOfPercentagesInclChurchFeePercentage": 34.51,
                     "sumOfPercentagesExclChurchFeePercentage": 33.39,
                     "municipalityTaxPercentage": 21.61,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.12
                  }
               ]
            },
            {
               "municipality": "SIGTUNA",
               "townships": [
                  {
                     "townshipCode": "01 91  06",
                     "township": "HUSBY-ÄRLINGHUNDRA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.19,
                     "sumOfPercentagesExclChurchFeePercentage": 32.26,
                     "municipalityTaxPercentage": 19.98,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.18,
                     "churchFeePercentage": 0.93
                  },
                  {
                     "townshipCode": "01 91  08",
                     "township": "NORRSUNDA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.19,
                     "sumOfPercentagesExclChurchFeePercentage": 32.26,
                     "municipalityTaxPercentage": 19.98,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.18,
                     "churchFeePercentage": 0.93
                  },
                  {
                     "townshipCode": "01 91  01",
                     "township": "SIGTUNA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.37,
                     "sumOfPercentagesExclChurchFeePercentage": 32.25,
                     "municipalityTaxPercentage": 19.98,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.17,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "01 91  09",
                     "township": "SKEPPTUNA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.19,
                     "sumOfPercentagesExclChurchFeePercentage": 32.26,
                     "municipalityTaxPercentage": 19.98,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.18,
                     "churchFeePercentage": 0.93
                  },
                  {
                     "townshipCode": "01 91  12",
                     "township": "VALSTA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.19,
                     "sumOfPercentagesExclChurchFeePercentage": 32.26,
                     "municipalityTaxPercentage": 19.98,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.18,
                     "churchFeePercentage": 0.93
                  }
               ]
            },
            {
               "municipality": "SIMRISHAMN",
               "townships": [
                  {
                     "townshipCode": "12 91  07",
                     "township": "BORRBY-ÖSTRA HOBY",
                     "sumOfPercentagesInclChurchFeePercentage": 32.884,
                     "sumOfPercentagesExclChurchFeePercentage": 31.65,
                     "municipalityTaxPercentage": 20.51,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.234
                  },
                  {
                     "townshipCode": "12 91  15",
                     "township": "HAMMENHÖG",
                     "sumOfPercentagesInclChurchFeePercentage": 32.884,
                     "sumOfPercentagesExclChurchFeePercentage": 31.65,
                     "municipalityTaxPercentage": 20.51,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.234
                  },
                  {
                     "townshipCode": "12 91  19",
                     "township": "KIVIK",
                     "sumOfPercentagesInclChurchFeePercentage": 33.13,
                     "sumOfPercentagesExclChurchFeePercentage": 31.7,
                     "municipalityTaxPercentage": 20.51,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.5,
                     "churchFeePercentage": 1.43
                  },
                  {
                     "townshipCode": "12 91  18",
                     "township": "RÖRUM",
                     "sumOfPercentagesInclChurchFeePercentage": 32.96,
                     "sumOfPercentagesExclChurchFeePercentage": 31.69,
                     "municipalityTaxPercentage": 20.51,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.49,
                     "churchFeePercentage": 1.27
                  },
                  {
                     "townshipCode": "12 91  17",
                     "township": "S:T OLOF",
                     "sumOfPercentagesInclChurchFeePercentage": 32.96,
                     "sumOfPercentagesExclChurchFeePercentage": 31.69,
                     "municipalityTaxPercentage": 20.51,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.49,
                     "churchFeePercentage": 1.27
                  },
                  {
                     "townshipCode": "12 91  01",
                     "township": "SIMRISHAMN",
                     "sumOfPercentagesInclChurchFeePercentage": 32.96,
                     "sumOfPercentagesExclChurchFeePercentage": 31.69,
                     "municipalityTaxPercentage": 20.51,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.49,
                     "churchFeePercentage": 1.27
                  },
                  {
                     "townshipCode": "12 91  11",
                     "township": "STIBY",
                     "sumOfPercentagesInclChurchFeePercentage": 32.884,
                     "sumOfPercentagesExclChurchFeePercentage": 31.65,
                     "municipalityTaxPercentage": 20.51,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.234
                  }
               ]
            },
            {
               "municipality": "SJÖBO",
               "townships": [
                  {
                     "townshipCode": "12 65  05",
                     "township": "BLENTARP",
                     "sumOfPercentagesInclChurchFeePercentage": 33.19,
                     "sumOfPercentagesExclChurchFeePercentage": 32.01,
                     "municipalityTaxPercentage": 20.92,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.18
                  },
                  {
                     "townshipCode": "12 65  10",
                     "township": "LÖVESTAD",
                     "sumOfPercentagesInclChurchFeePercentage": 33.29,
                     "sumOfPercentagesExclChurchFeePercentage": 32.18,
                     "municipalityTaxPercentage": 20.92,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.57,
                     "churchFeePercentage": 1.11
                  },
                  {
                     "townshipCode": "12 65  03",
                     "township": "SJÖBO",
                     "sumOfPercentagesInclChurchFeePercentage": 32.79,
                     "sumOfPercentagesExclChurchFeePercentage": 31.91,
                     "municipalityTaxPercentage": 20.92,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 0.88
                  },
                  {
                     "townshipCode": "12 65  11",
                     "township": "VOLLSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 33.47,
                     "sumOfPercentagesExclChurchFeePercentage": 32.21,
                     "municipalityTaxPercentage": 20.92,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.6,
                     "churchFeePercentage": 1.26
                  }
               ]
            },
            {
               "municipality": "SKARA",
               "townships": [
                  {
                     "townshipCode": "14 95  16",
                     "township": "ARDALA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.13,
                     "sumOfPercentagesExclChurchFeePercentage": 32.96,
                     "municipalityTaxPercentage": 21.1,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.17
                  },
                  {
                     "townshipCode": "14 95  08",
                     "township": "AXVALL",
                     "sumOfPercentagesInclChurchFeePercentage": 34.13,
                     "sumOfPercentagesExclChurchFeePercentage": 32.96,
                     "municipalityTaxPercentage": 21.1,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.17
                  },
                  {
                     "townshipCode": "14 95  04",
                     "township": "EGGBY-ÖGLUNDA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.13,
                     "sumOfPercentagesExclChurchFeePercentage": 32.96,
                     "municipalityTaxPercentage": 21.1,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.17
                  },
                  {
                     "townshipCode": "14 95  01",
                     "township": "SKARA DOMKYRKOFÖRS.",
                     "sumOfPercentagesInclChurchFeePercentage": 34.13,
                     "sumOfPercentagesExclChurchFeePercentage": 32.96,
                     "municipalityTaxPercentage": 21.1,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.17
                  },
                  {
                     "townshipCode": "14 95  05",
                     "township": "VARNHEM",
                     "sumOfPercentagesInclChurchFeePercentage": 34.13,
                     "sumOfPercentagesExclChurchFeePercentage": 32.96,
                     "municipalityTaxPercentage": 21.1,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.17
                  }
               ]
            },
            {
               "municipality": "SKELLEFTEÅ",
               "townships": [
                  {
                     "townshipCode": "24 82  03",
                     "township": "BUREÅ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.75,
                     "sumOfPercentagesExclChurchFeePercentage": 33.7,
                     "municipalityTaxPercentage": 22.6,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.05
                  },
                  {
                     "townshipCode": "24 82  11",
                     "township": "BURTRÄSK",
                     "sumOfPercentagesInclChurchFeePercentage": 35.02,
                     "sumOfPercentagesExclChurchFeePercentage": 33.81,
                     "municipalityTaxPercentage": 22.6,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.41,
                     "churchFeePercentage": 1.21
                  },
                  {
                     "townshipCode": "24 82  07",
                     "township": "BYSKE-FÄLLFORS",
                     "sumOfPercentagesInclChurchFeePercentage": 34.7,
                     "sumOfPercentagesExclChurchFeePercentage": 33.67,
                     "municipalityTaxPercentage": 22.6,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.03
                  },
                  {
                     "townshipCode": "24 82  05",
                     "township": "JÖRN-BOLIDEN",
                     "sumOfPercentagesInclChurchFeePercentage": 34.7,
                     "sumOfPercentagesExclChurchFeePercentage": 33.67,
                     "municipalityTaxPercentage": 22.6,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.03
                  },
                  {
                     "townshipCode": "24 82  06",
                     "township": "KÅGEDALEN",
                     "sumOfPercentagesInclChurchFeePercentage": 34.7,
                     "sumOfPercentagesExclChurchFeePercentage": 33.67,
                     "municipalityTaxPercentage": 22.6,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.03
                  },
                  {
                     "townshipCode": "24 82  10",
                     "township": "LÖVÅNGER",
                     "sumOfPercentagesInclChurchFeePercentage": 35.02,
                     "sumOfPercentagesExclChurchFeePercentage": 33.81,
                     "municipalityTaxPercentage": 22.6,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.41,
                     "churchFeePercentage": 1.21
                  },
                  {
                     "townshipCode": "24 82  04",
                     "township": "SKELLEFTEÅ LANDSFÖRS.",
                     "sumOfPercentagesInclChurchFeePercentage": 34.7,
                     "sumOfPercentagesExclChurchFeePercentage": 33.67,
                     "municipalityTaxPercentage": 22.6,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.03
                  },
                  {
                     "townshipCode": "24 82  01",
                     "township": "SKELLEFTEÅ S:T OLOV",
                     "sumOfPercentagesInclChurchFeePercentage": 34.7,
                     "sumOfPercentagesExclChurchFeePercentage": 33.67,
                     "municipalityTaxPercentage": 22.6,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.03
                  },
                  {
                     "townshipCode": "24 82  02",
                     "township": "SKELLEFTEÅ S:T ÖRJAN",
                     "sumOfPercentagesInclChurchFeePercentage": 34.87,
                     "sumOfPercentagesExclChurchFeePercentage": 33.7,
                     "municipalityTaxPercentage": 22.6,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.17
                  }
               ]
            },
            {
               "municipality": "SKINNSKATTEBERG",
               "townships": [
                  {
                     "townshipCode": "19 04  02",
                     "township": "SKINNSKATTEBERG MED HED OCH GUNNILBO",
                     "sumOfPercentagesInclChurchFeePercentage": 34.88,
                     "sumOfPercentagesExclChurchFeePercentage": 33.7,
                     "municipalityTaxPercentage": 22.51,
                     "countyTaxPercentage": 10.88,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 1.18
                  }
               ]
            },
            {
               "municipality": "SKURUP",
               "townships": [
                  {
                     "townshipCode": "12 64  06",
                     "township": "SKIVARP",
                     "sumOfPercentagesInclChurchFeePercentage": 32.34,
                     "sumOfPercentagesExclChurchFeePercentage": 31.06,
                     "municipalityTaxPercentage": 20.02,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.28
                  },
                  {
                     "townshipCode": "12 64  01",
                     "township": "SKURUP",
                     "sumOfPercentagesInclChurchFeePercentage": 32.09,
                     "sumOfPercentagesExclChurchFeePercentage": 31.01,
                     "municipalityTaxPercentage": 20.02,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.08
                  },
                  {
                     "townshipCode": "12 64  12",
                     "township": "VILLIE",
                     "sumOfPercentagesInclChurchFeePercentage": 32.39,
                     "sumOfPercentagesExclChurchFeePercentage": 31.33,
                     "municipalityTaxPercentage": 20.02,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.62,
                     "churchFeePercentage": 1.06
                  }
               ]
            },
            {
               "municipality": "SKÖVDE",
               "townships": [
                  {
                     "townshipCode": "14 96  24",
                     "township": "BERG",
                     "sumOfPercentagesInclChurchFeePercentage": 33.99,
                     "sumOfPercentagesExclChurchFeePercentage": 32.64,
                     "municipalityTaxPercentage": 20.86,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.35
                  },
                  {
                     "townshipCode": "14 96  20",
                     "township": "FRÖSVE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.99,
                     "sumOfPercentagesExclChurchFeePercentage": 32.64,
                     "municipalityTaxPercentage": 20.86,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.35
                  },
                  {
                     "townshipCode": "14 96  27",
                     "township": "GÖTLUNDA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.99,
                     "sumOfPercentagesExclChurchFeePercentage": 32.64,
                     "municipalityTaxPercentage": 20.86,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.35
                  },
                  {
                     "townshipCode": "14 96  08",
                     "township": "SKULTORP",
                     "sumOfPercentagesInclChurchFeePercentage": 34.19,
                     "sumOfPercentagesExclChurchFeePercentage": 32.64,
                     "municipalityTaxPercentage": 20.86,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.55
                  },
                  {
                     "townshipCode": "14 96  01",
                     "township": "SKÖVDE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.53,
                     "sumOfPercentagesExclChurchFeePercentage": 32.55,
                     "municipalityTaxPercentage": 20.86,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.21,
                     "churchFeePercentage": 0.98
                  },
                  {
                     "townshipCode": "14 96  14",
                     "township": "SVENTORP-FORSBY",
                     "sumOfPercentagesInclChurchFeePercentage": 33.98,
                     "sumOfPercentagesExclChurchFeePercentage": 32.7,
                     "municipalityTaxPercentage": 20.86,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.28
                  },
                  {
                     "townshipCode": "14 96  17",
                     "township": "VÄRING",
                     "sumOfPercentagesInclChurchFeePercentage": 33.99,
                     "sumOfPercentagesExclChurchFeePercentage": 32.64,
                     "municipalityTaxPercentage": 20.86,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.35
                  },
                  {
                     "townshipCode": "14 96  15",
                     "township": "VÄRSÅS- VAROLA- VRETEN",
                     "sumOfPercentagesInclChurchFeePercentage": 33.98,
                     "sumOfPercentagesExclChurchFeePercentage": 32.7,
                     "municipalityTaxPercentage": 20.86,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.28
                  }
               ]
            },
            {
               "municipality": "SMEDJEBACKEN",
               "townships": [
                  {
                     "townshipCode": "20 61  01",
                     "township": "NORRBÄRKE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.57,
                     "sumOfPercentagesExclChurchFeePercentage": 34.38,
                     "municipalityTaxPercentage": 22.93,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.19
                  },
                  {
                     "townshipCode": "20 61  02",
                     "township": "SÖDERBÄRKE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.6,
                     "sumOfPercentagesExclChurchFeePercentage": 34.35,
                     "municipalityTaxPercentage": 22.93,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.26,
                     "churchFeePercentage": 1.25
                  }
               ]
            },
            {
               "municipality": "SOLLEFTEÅ",
               "townships": [
                  {
                     "townshipCode": "22 83  11",
                     "township": "BOTEÅ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.86,
                     "sumOfPercentagesExclChurchFeePercentage": 34.39,
                     "municipalityTaxPercentage": 23.39,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 1.47
                  },
                  {
                     "townshipCode": "22 83  05",
                     "township": "ED",
                     "sumOfPercentagesInclChurchFeePercentage": 35.88,
                     "sumOfPercentagesExclChurchFeePercentage": 34.65,
                     "municipalityTaxPercentage": 23.39,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.57,
                     "churchFeePercentage": 1.23
                  },
                  {
                     "townshipCode": "22 83  03",
                     "township": "GRANINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.91,
                     "sumOfPercentagesExclChurchFeePercentage": 34.53,
                     "municipalityTaxPercentage": 23.39,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.38
                  },
                  {
                     "townshipCode": "22 83  07",
                     "township": "HELGUM",
                     "sumOfPercentagesInclChurchFeePercentage": 35.91,
                     "sumOfPercentagesExclChurchFeePercentage": 34.53,
                     "municipalityTaxPercentage": 23.39,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.38
                  },
                  {
                     "townshipCode": "22 83  09",
                     "township": "JUNSELE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.88,
                     "sumOfPercentagesExclChurchFeePercentage": 34.65,
                     "municipalityTaxPercentage": 23.39,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.57,
                     "churchFeePercentage": 1.23
                  },
                  {
                     "townshipCode": "22 83  04",
                     "township": "LÅNGSELE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.91,
                     "sumOfPercentagesExclChurchFeePercentage": 34.53,
                     "municipalityTaxPercentage": 23.39,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.38
                  },
                  {
                     "townshipCode": "22 83  02",
                     "township": "MULTRÅ-SÅNGA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.86,
                     "sumOfPercentagesExclChurchFeePercentage": 34.39,
                     "municipalityTaxPercentage": 23.39,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 1.47
                  },
                  {
                     "townshipCode": "22 83  15",
                     "township": "RAMSELE-EDSELE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.9,
                     "sumOfPercentagesExclChurchFeePercentage": 34.61,
                     "municipalityTaxPercentage": 23.39,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.53,
                     "churchFeePercentage": 1.29
                  },
                  {
                     "townshipCode": "22 83  06",
                     "township": "RESELE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.88,
                     "sumOfPercentagesExclChurchFeePercentage": 34.65,
                     "municipalityTaxPercentage": 23.39,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.57,
                     "churchFeePercentage": 1.23
                  },
                  {
                     "townshipCode": "22 83  01",
                     "township": "SOLLEFTEÅ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.86,
                     "sumOfPercentagesExclChurchFeePercentage": 34.39,
                     "municipalityTaxPercentage": 23.39,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 1.47
                  },
                  {
                     "townshipCode": "22 83  08",
                     "township": "ÅDALS-LIDEN",
                     "sumOfPercentagesInclChurchFeePercentage": 35.88,
                     "sumOfPercentagesExclChurchFeePercentage": 34.65,
                     "municipalityTaxPercentage": 23.39,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.57,
                     "churchFeePercentage": 1.23
                  },
                  {
                     "townshipCode": "22 83  12",
                     "township": "ÖVERLÄNNÄS",
                     "sumOfPercentagesInclChurchFeePercentage": 35.86,
                     "sumOfPercentagesExclChurchFeePercentage": 34.39,
                     "municipalityTaxPercentage": 23.39,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 1.47
                  }
               ]
            },
            {
               "municipality": "SOLLENTUNA",
               "townships": [
                  {
                     "townshipCode": "01 63  01",
                     "township": "SOLLENTUNA",
                     "sumOfPercentagesInclChurchFeePercentage": 31.12,
                     "sumOfPercentagesExclChurchFeePercentage": 30.3,
                     "municipalityTaxPercentage": 18.1,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.1,
                     "churchFeePercentage": 0.82
                  }
               ]
            },
            {
               "municipality": "SOLNA",
               "townships": [
                  {
                     "townshipCode": "01 84  01",
                     "township": "SOLNA",
                     "sumOfPercentagesInclChurchFeePercentage": 30.01,
                     "sumOfPercentagesExclChurchFeePercentage": 29.32,
                     "municipalityTaxPercentage": 17.12,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.1,
                     "churchFeePercentage": 0.69
                  }
               ]
            },
            {
               "municipality": "SORSELE",
               "townships": [
                  {
                     "townshipCode": "24 22  01",
                     "township": "SORSELE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.42,
                     "sumOfPercentagesExclChurchFeePercentage": 34.4,
                     "municipalityTaxPercentage": 23.1,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.5,
                     "churchFeePercentage": 1.02
                  }
               ]
            },
            {
               "municipality": "SOTENÄS",
               "townships": [
                  {
                     "townshipCode": "14 27  05",
                     "township": "HUNNEBOSTRAND",
                     "sumOfPercentagesInclChurchFeePercentage": 35.25,
                     "sumOfPercentagesExclChurchFeePercentage": 33.81,
                     "municipalityTaxPercentage": 21.99,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.34,
                     "churchFeePercentage": 1.44
                  },
                  {
                     "townshipCode": "14 27  01",
                     "township": "SÖDRA SOTENÄS",
                     "sumOfPercentagesInclChurchFeePercentage": 35.04,
                     "sumOfPercentagesExclChurchFeePercentage": 33.81,
                     "municipalityTaxPercentage": 21.99,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.34,
                     "churchFeePercentage": 1.23
                  },
                  {
                     "townshipCode": "14 27  06",
                     "township": "TOSSENE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.25,
                     "sumOfPercentagesExclChurchFeePercentage": 33.81,
                     "municipalityTaxPercentage": 21.99,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.34,
                     "churchFeePercentage": 1.44
                  }
               ]
            },
            {
               "municipality": "STAFFANSTORP",
               "townships": [
                  {
                     "townshipCode": "12 30  13",
                     "township": "S:T STAFFAN",
                     "sumOfPercentagesInclChurchFeePercentage": 30.5,
                     "sumOfPercentagesExclChurchFeePercentage": 29.63,
                     "municipalityTaxPercentage": 18.79,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.15,
                     "churchFeePercentage": 0.87
                  },
                  {
                     "townshipCode": "12 30  06",
                     "township": "UPPÅKRA",
                     "sumOfPercentagesInclChurchFeePercentage": 30.86,
                     "sumOfPercentagesExclChurchFeePercentage": 29.67,
                     "municipalityTaxPercentage": 18.79,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.19,
                     "churchFeePercentage": 1.19
                  }
               ]
            },
            {
               "municipality": "STENUNGSUND",
               "townships": [
                  {
                     "townshipCode": "14 15  05",
                     "township": "JÖRLANDA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.43,
                     "sumOfPercentagesExclChurchFeePercentage": 33.28,
                     "municipalityTaxPercentage": 21.64,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.16,
                     "churchFeePercentage": 1.15
                  },
                  {
                     "townshipCode": "14 15  02",
                     "township": "NORUM",
                     "sumOfPercentagesInclChurchFeePercentage": 34.53,
                     "sumOfPercentagesExclChurchFeePercentage": 33.32,
                     "municipalityTaxPercentage": 21.64,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 1.21
                  },
                  {
                     "townshipCode": "14 15  04",
                     "township": "SPEKERÖD-UCKLUM",
                     "sumOfPercentagesInclChurchFeePercentage": 34.6,
                     "sumOfPercentagesExclChurchFeePercentage": 33.39,
                     "municipalityTaxPercentage": 21.64,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.21
                  },
                  {
                     "townshipCode": "14 15  03",
                     "township": "ÖDSMÅL",
                     "sumOfPercentagesInclChurchFeePercentage": 34.53,
                     "sumOfPercentagesExclChurchFeePercentage": 33.32,
                     "municipalityTaxPercentage": 21.64,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 1.21
                  }
               ]
            },
            {
               "municipality": "STOCKHOLM",
               "townships": [
                  {
                     "townshipCode": "01 80  05",
                     "township": "ADOLF FREDRIK",
                     "sumOfPercentagesInclChurchFeePercentage": 30.835,
                     "sumOfPercentagesExclChurchFeePercentage": 29.855,
                     "municipalityTaxPercentage": 17.68,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.075,
                     "churchFeePercentage": 0.98
                  },
                  {
                     "townshipCode": "01 80  27",
                     "township": "BROMMA",
                     "sumOfPercentagesInclChurchFeePercentage": 30.485,
                     "sumOfPercentagesExclChurchFeePercentage": 29.855,
                     "municipalityTaxPercentage": 17.68,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.075,
                     "churchFeePercentage": 0.63
                  },
                  {
                     "townshipCode": "01 80  21",
                     "township": "BRÄNNKYRKA",
                     "sumOfPercentagesInclChurchFeePercentage": 30.615,
                     "sumOfPercentagesExclChurchFeePercentage": 29.855,
                     "municipalityTaxPercentage": 17.68,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.075,
                     "churchFeePercentage": 0.76
                  },
                  {
                     "townshipCode": "01 80  09",
                     "township": "ENGELBREKT",
                     "sumOfPercentagesInclChurchFeePercentage": 30.645,
                     "sumOfPercentagesExclChurchFeePercentage": 29.855,
                     "municipalityTaxPercentage": 17.68,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.075,
                     "churchFeePercentage": 0.79
                  },
                  {
                     "townshipCode": "01 80  34",
                     "township": "ENSKEDE-ÅRSTA",
                     "sumOfPercentagesInclChurchFeePercentage": 30.645,
                     "sumOfPercentagesExclChurchFeePercentage": 29.855,
                     "municipalityTaxPercentage": 17.68,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.075,
                     "churchFeePercentage": 0.79
                  },
                  {
                     "townshipCode": "01 80  25",
                     "township": "FARSTA",
                     "sumOfPercentagesInclChurchFeePercentage": 30.725,
                     "sumOfPercentagesExclChurchFeePercentage": 29.855,
                     "municipalityTaxPercentage": 17.68,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.075,
                     "churchFeePercentage": 0.87
                  },
                  {
                     "townshipCode": "01 80  06",
                     "township": "GUSTAV VASA",
                     "sumOfPercentagesInclChurchFeePercentage": 30.835,
                     "sumOfPercentagesExclChurchFeePercentage": 29.855,
                     "municipalityTaxPercentage": 17.68,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.075,
                     "churchFeePercentage": 0.98
                  },
                  {
                     "townshipCode": "01 80  10",
                     "township": "HEDVIG ELEONORA",
                     "sumOfPercentagesInclChurchFeePercentage": 30.595,
                     "sumOfPercentagesExclChurchFeePercentage": 29.855,
                     "municipalityTaxPercentage": 17.68,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.075,
                     "churchFeePercentage": 0.74
                  },
                  {
                     "townshipCode": "01 80  39",
                     "township": "HÄGERSTEN",
                     "sumOfPercentagesInclChurchFeePercentage": 30.52,
                     "sumOfPercentagesExclChurchFeePercentage": 29.855,
                     "municipalityTaxPercentage": 17.68,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.075,
                     "churchFeePercentage": 0.665
                  },
                  {
                     "townshipCode": "01 80  38",
                     "township": "HÄSSELBY",
                     "sumOfPercentagesInclChurchFeePercentage": 30.545,
                     "sumOfPercentagesExclChurchFeePercentage": 29.855,
                     "municipalityTaxPercentage": 17.68,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.075,
                     "churchFeePercentage": 0.69
                  },
                  {
                     "townshipCode": "01 80  14",
                     "township": "HÖGALID",
                     "sumOfPercentagesInclChurchFeePercentage": 30.585,
                     "sumOfPercentagesExclChurchFeePercentage": 29.855,
                     "municipalityTaxPercentage": 17.68,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.075,
                     "churchFeePercentage": 0.73
                  },
                  {
                     "townshipCode": "01 80  15",
                     "township": "KATARINA",
                     "sumOfPercentagesInclChurchFeePercentage": 30.655,
                     "sumOfPercentagesExclChurchFeePercentage": 29.855,
                     "municipalityTaxPercentage": 17.68,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.075,
                     "churchFeePercentage": 0.8
                  },
                  {
                     "townshipCode": "01 80  13",
                     "township": "MARIA MAGDALENA",
                     "sumOfPercentagesInclChurchFeePercentage": 30.725,
                     "sumOfPercentagesExclChurchFeePercentage": 29.855,
                     "municipalityTaxPercentage": 17.68,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.075,
                     "churchFeePercentage": 0.87
                  },
                  {
                     "townshipCode": "01 80  11",
                     "township": "OSCAR",
                     "sumOfPercentagesInclChurchFeePercentage": 30.545,
                     "sumOfPercentagesExclChurchFeePercentage": 29.855,
                     "municipalityTaxPercentage": 17.68,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.075,
                     "churchFeePercentage": 0.69
                  },
                  {
                     "townshipCode": "01 80  04",
                     "township": "S:T JOHANNES",
                     "sumOfPercentagesInclChurchFeePercentage": 30.795,
                     "sumOfPercentagesExclChurchFeePercentage": 29.855,
                     "municipalityTaxPercentage": 17.68,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.075,
                     "churchFeePercentage": 0.94
                  },
                  {
                     "townshipCode": "01 80  07",
                     "township": "S:T MATTEUS",
                     "sumOfPercentagesInclChurchFeePercentage": 30.525,
                     "sumOfPercentagesExclChurchFeePercentage": 29.855,
                     "municipalityTaxPercentage": 17.68,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.075,
                     "churchFeePercentage": 0.67
                  },
                  {
                     "townshipCode": "01 80  36",
                     "township": "SKARPNÄCK",
                     "sumOfPercentagesInclChurchFeePercentage": 30.645,
                     "sumOfPercentagesExclChurchFeePercentage": 29.855,
                     "municipalityTaxPercentage": 17.68,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.075,
                     "churchFeePercentage": 0.79
                  },
                  {
                     "townshipCode": "01 80  40",
                     "township": "SKÄRHOLMEN",
                     "sumOfPercentagesInclChurchFeePercentage": 30.755,
                     "sumOfPercentagesExclChurchFeePercentage": 29.855,
                     "municipalityTaxPercentage": 17.68,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.075,
                     "churchFeePercentage": 0.9
                  },
                  {
                     "townshipCode": "01 80  17",
                     "township": "SOFIA",
                     "sumOfPercentagesInclChurchFeePercentage": 30.685,
                     "sumOfPercentagesExclChurchFeePercentage": 29.855,
                     "municipalityTaxPercentage": 17.68,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.075,
                     "churchFeePercentage": 0.83
                  },
                  {
                     "townshipCode": "01 80  41",
                     "township": "SPÅNGA-KISTA",
                     "sumOfPercentagesInclChurchFeePercentage": 30.585,
                     "sumOfPercentagesExclChurchFeePercentage": 29.855,
                     "municipalityTaxPercentage": 17.68,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.075,
                     "churchFeePercentage": 0.73
                  },
                  {
                     "townshipCode": "01 80  01",
                     "township": "STOCKHOLMS DOMKYRKOFÖRS.",
                     "sumOfPercentagesInclChurchFeePercentage": 30.885,
                     "sumOfPercentagesExclChurchFeePercentage": 29.855,
                     "municipalityTaxPercentage": 17.68,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.075,
                     "churchFeePercentage": 1.03
                  },
                  {
                     "townshipCode": "01 80  23",
                     "township": "VANTÖR",
                     "sumOfPercentagesInclChurchFeePercentage": 30.555,
                     "sumOfPercentagesExclChurchFeePercentage": 29.855,
                     "municipalityTaxPercentage": 17.68,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.075,
                     "churchFeePercentage": 0.7
                  },
                  {
                     "townshipCode": "01 80  31",
                     "township": "VÄLLINGBY",
                     "sumOfPercentagesInclChurchFeePercentage": 30.585,
                     "sumOfPercentagesExclChurchFeePercentage": 29.855,
                     "municipalityTaxPercentage": 17.68,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.075,
                     "churchFeePercentage": 0.73
                  },
                  {
                     "townshipCode": "01 80  29",
                     "township": "VÄSTERLED",
                     "sumOfPercentagesInclChurchFeePercentage": 30.565,
                     "sumOfPercentagesExclChurchFeePercentage": 29.855,
                     "municipalityTaxPercentage": 17.68,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.075,
                     "churchFeePercentage": 0.71
                  },
                  {
                     "townshipCode": "01 80  19",
                     "township": "VÄSTERMALM",
                     "sumOfPercentagesInclChurchFeePercentage": 30.555,
                     "sumOfPercentagesExclChurchFeePercentage": 29.855,
                     "municipalityTaxPercentage": 17.68,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.075,
                     "churchFeePercentage": 0.7
                  }
               ]
            },
            {
               "municipality": "STORFORS",
               "townships": [
                  {
                     "townshipCode": "17 60  01",
                     "township": "STORFORS",
                     "sumOfPercentagesInclChurchFeePercentage": 35.25,
                     "sumOfPercentagesExclChurchFeePercentage": 33.97,
                     "municipalityTaxPercentage": 22.5,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.28
                  }
               ]
            },
            {
               "municipality": "STORUMAN",
               "townships": [
                  {
                     "townshipCode": "24 21  01",
                     "township": "STENSELE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.605,
                     "sumOfPercentagesExclChurchFeePercentage": 34.305,
                     "municipalityTaxPercentage": 23.1,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.405,
                     "churchFeePercentage": 1.3
                  },
                  {
                     "townshipCode": "24 21  03",
                     "township": "TÄRNA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.45,
                     "sumOfPercentagesExclChurchFeePercentage": 34.3,
                     "municipalityTaxPercentage": 23.1,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.15
                  }
               ]
            },
            {
               "municipality": "STRÄNGNÄS",
               "townships": [
                  {
                     "townshipCode": "04 86  04",
                     "township": "MARIEFRED",
                     "sumOfPercentagesInclChurchFeePercentage": 33.77,
                     "sumOfPercentagesExclChurchFeePercentage": 32.69,
                     "municipalityTaxPercentage": 21.73,
                     "countyTaxPercentage": 10.77,
                     "funeralFeePercentage": 0.19,
                     "churchFeePercentage": 1.08
                  },
                  {
                     "townshipCode": "04 86  07",
                     "township": "STALLARHOLMEN",
                     "sumOfPercentagesInclChurchFeePercentage": 34.14,
                     "sumOfPercentagesExclChurchFeePercentage": 32.74,
                     "municipalityTaxPercentage": 21.73,
                     "countyTaxPercentage": 10.77,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1.4
                  },
                  {
                     "townshipCode": "04 86  01",
                     "township": "STRÄNGNÄS DOMKYRKOFÖRS. MED ASPÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 33.79,
                     "sumOfPercentagesExclChurchFeePercentage": 32.77,
                     "municipalityTaxPercentage": 21.73,
                     "countyTaxPercentage": 10.77,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.02
                  },
                  {
                     "townshipCode": "04 86  14",
                     "township": "VÅRFRUBERGA-HÄRAD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.27,
                     "sumOfPercentagesExclChurchFeePercentage": 32.85,
                     "municipalityTaxPercentage": 21.73,
                     "countyTaxPercentage": 10.77,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.42
                  },
                  {
                     "townshipCode": "04 86  06",
                     "township": "ÅKER-LÄNNA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.04,
                     "sumOfPercentagesExclChurchFeePercentage": 32.75,
                     "municipalityTaxPercentage": 21.73,
                     "countyTaxPercentage": 10.77,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.29
                  }
               ]
            },
            {
               "municipality": "STRÖMSTAD",
               "townships": [
                  {
                     "townshipCode": "14 86  06",
                     "township": "IDEFJORDEN",
                     "sumOfPercentagesInclChurchFeePercentage": 34.96,
                     "sumOfPercentagesExclChurchFeePercentage": 33.75,
                     "municipalityTaxPercentage": 21.91,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.21
                  },
                  {
                     "townshipCode": "14 86  02",
                     "township": "SKEE-TJÄRNÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.96,
                     "sumOfPercentagesExclChurchFeePercentage": 33.75,
                     "municipalityTaxPercentage": 21.91,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.21
                  },
                  {
                     "townshipCode": "14 86  01",
                     "township": "STRÖMSTAD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.96,
                     "sumOfPercentagesExclChurchFeePercentage": 33.75,
                     "municipalityTaxPercentage": 21.91,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.21
                  }
               ]
            },
            {
               "municipality": "STRÖMSUND",
               "townships": [
                  {
                     "townshipCode": "23 13  07",
                     "township": "BODUM",
                     "sumOfPercentagesInclChurchFeePercentage": 35.8,
                     "sumOfPercentagesExclChurchFeePercentage": 34.32,
                     "municipalityTaxPercentage": 22.72,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.48
                  },
                  {
                     "townshipCode": "23 13  06",
                     "township": "FJÄLLSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.8,
                     "sumOfPercentagesExclChurchFeePercentage": 34.32,
                     "municipalityTaxPercentage": 22.72,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.48
                  },
                  {
                     "townshipCode": "23 13  05",
                     "township": "FROSTVIKEN",
                     "sumOfPercentagesInclChurchFeePercentage": 36.02,
                     "sumOfPercentagesExclChurchFeePercentage": 34.54,
                     "municipalityTaxPercentage": 22.72,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.62,
                     "churchFeePercentage": 1.48
                  },
                  {
                     "townshipCode": "23 13  03",
                     "township": "GÅXSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.8,
                     "sumOfPercentagesExclChurchFeePercentage": 34.32,
                     "municipalityTaxPercentage": 22.72,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.48
                  },
                  {
                     "townshipCode": "23 13  04",
                     "township": "HAMMERDAL",
                     "sumOfPercentagesInclChurchFeePercentage": 35.8,
                     "sumOfPercentagesExclChurchFeePercentage": 34.32,
                     "municipalityTaxPercentage": 22.72,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.48
                  },
                  {
                     "townshipCode": "23 13  01",
                     "township": "STRÖM-ALANÄS",
                     "sumOfPercentagesInclChurchFeePercentage": 35.8,
                     "sumOfPercentagesExclChurchFeePercentage": 34.32,
                     "municipalityTaxPercentage": 22.72,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.48
                  },
                  {
                     "townshipCode": "23 13  08",
                     "township": "TÅSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.8,
                     "sumOfPercentagesExclChurchFeePercentage": 34.32,
                     "municipalityTaxPercentage": 22.72,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.48
                  }
               ]
            },
            {
               "municipality": "SUNDBYBERG",
               "townships": [
                  {
                     "townshipCode": "01 83  01",
                     "township": "SUNDBYBERG",
                     "sumOfPercentagesInclChurchFeePercentage": 31.835,
                     "sumOfPercentagesExclChurchFeePercentage": 31.1,
                     "municipalityTaxPercentage": 18.88,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.12,
                     "churchFeePercentage": 0.735
                  }
               ]
            },
            {
               "municipality": "SUNDSVALL",
               "townships": [
                  {
                     "townshipCode": "22 81  04",
                     "township": "ALNÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.63,
                     "sumOfPercentagesExclChurchFeePercentage": 33.58,
                     "municipalityTaxPercentage": 22.59,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.05
                  },
                  {
                     "townshipCode": "22 81  09",
                     "township": "ATTMAR",
                     "sumOfPercentagesInclChurchFeePercentage": 34.98,
                     "sumOfPercentagesExclChurchFeePercentage": 33.68,
                     "municipalityTaxPercentage": 22.59,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.3
                  },
                  {
                     "townshipCode": "22 81  12",
                     "township": "HOLM",
                     "sumOfPercentagesInclChurchFeePercentage": 35.12,
                     "sumOfPercentagesExclChurchFeePercentage": 33.87,
                     "municipalityTaxPercentage": 22.59,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.59,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "22 81  11",
                     "township": "INDAL",
                     "sumOfPercentagesInclChurchFeePercentage": 35.12,
                     "sumOfPercentagesExclChurchFeePercentage": 33.87,
                     "municipalityTaxPercentage": 22.59,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.59,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "22 81  13",
                     "township": "LIDEN",
                     "sumOfPercentagesInclChurchFeePercentage": 35.12,
                     "sumOfPercentagesExclChurchFeePercentage": 33.87,
                     "municipalityTaxPercentage": 22.59,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.59,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "22 81  10",
                     "township": "NJURUNDA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.62,
                     "sumOfPercentagesExclChurchFeePercentage": 33.64,
                     "municipalityTaxPercentage": 22.59,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 0.98
                  },
                  {
                     "townshipCode": "22 81  06",
                     "township": "SELÅNGER",
                     "sumOfPercentagesInclChurchFeePercentage": 34.8,
                     "sumOfPercentagesExclChurchFeePercentage": 33.45,
                     "municipalityTaxPercentage": 22.59,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.17,
                     "churchFeePercentage": 1.35
                  },
                  {
                     "townshipCode": "22 81  03",
                     "township": "SKÖN",
                     "sumOfPercentagesInclChurchFeePercentage": 34.48,
                     "sumOfPercentagesExclChurchFeePercentage": 33.53,
                     "municipalityTaxPercentage": 22.59,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 0.95
                  },
                  {
                     "townshipCode": "22 81  07",
                     "township": "STÖDE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.02,
                     "sumOfPercentagesExclChurchFeePercentage": 33.8,
                     "municipalityTaxPercentage": 22.59,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.52,
                     "churchFeePercentage": 1.22
                  },
                  {
                     "townshipCode": "22 81  01",
                     "township": "SUNDSVALL",
                     "sumOfPercentagesInclChurchFeePercentage": 34.78,
                     "sumOfPercentagesExclChurchFeePercentage": 33.56,
                     "municipalityTaxPercentage": 22.59,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.22
                  },
                  {
                     "townshipCode": "22 81  05",
                     "township": "SÄTTNA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.12,
                     "sumOfPercentagesExclChurchFeePercentage": 33.87,
                     "municipalityTaxPercentage": 22.59,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.59,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "22 81  08",
                     "township": "TUNA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.83,
                     "sumOfPercentagesExclChurchFeePercentage": 33.58,
                     "municipalityTaxPercentage": 22.59,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.25
                  }
               ]
            },
            {
               "municipality": "SUNNE",
               "townships": [
                  {
                     "townshipCode": "17 66  04",
                     "township": "GRÄSMARK",
                     "sumOfPercentagesInclChurchFeePercentage": 35.19,
                     "sumOfPercentagesExclChurchFeePercentage": 33.93,
                     "municipalityTaxPercentage": 22.15,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.58,
                     "churchFeePercentage": 1.26
                  },
                  {
                     "townshipCode": "17 66  05",
                     "township": "LYSVIK",
                     "sumOfPercentagesInclChurchFeePercentage": 35.3,
                     "sumOfPercentagesExclChurchFeePercentage": 33.93,
                     "municipalityTaxPercentage": 22.15,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.58,
                     "churchFeePercentage": 1.37
                  },
                  {
                     "townshipCode": "17 66  01",
                     "township": "SUNNE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.19,
                     "sumOfPercentagesExclChurchFeePercentage": 33.93,
                     "municipalityTaxPercentage": 22.15,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.58,
                     "churchFeePercentage": 1.26
                  },
                  {
                     "townshipCode": "17 66  02",
                     "township": "VÄSTRA ÄMTERVIK",
                     "sumOfPercentagesInclChurchFeePercentage": 35.19,
                     "sumOfPercentagesExclChurchFeePercentage": 33.93,
                     "municipalityTaxPercentage": 22.15,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.58,
                     "churchFeePercentage": 1.26
                  },
                  {
                     "townshipCode": "17 66  03",
                     "township": "ÖSTRA ÄMTERVIK",
                     "sumOfPercentagesInclChurchFeePercentage": 35.19,
                     "sumOfPercentagesExclChurchFeePercentage": 33.93,
                     "municipalityTaxPercentage": 22.15,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.58,
                     "churchFeePercentage": 1.26
                  }
               ]
            },
            {
               "municipality": "SURAHAMMAR",
               "townships": [
                  {
                     "townshipCode": "19 07  01",
                     "township": "SURA-RAMNÄS",
                     "sumOfPercentagesInclChurchFeePercentage": 34.5,
                     "sumOfPercentagesExclChurchFeePercentage": 33.38,
                     "municipalityTaxPercentage": 22.31,
                     "countyTaxPercentage": 10.88,
                     "funeralFeePercentage": 0.19,
                     "churchFeePercentage": 1.12
                  }
               ]
            },
            {
               "municipality": "SVALÖV",
               "townships": [
                  {
                     "townshipCode": "12 14  08",
                     "township": "BILLEBERGA-SIREKÖPINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 32.91,
                     "sumOfPercentagesExclChurchFeePercentage": 31.64,
                     "municipalityTaxPercentage": 20.49,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.46,
                     "churchFeePercentage": 1.27
                  },
                  {
                     "townshipCode": "12 14  05",
                     "township": "KÅGERÖD-RÖSTÅNGA",
                     "sumOfPercentagesInclChurchFeePercentage": 32.96,
                     "sumOfPercentagesExclChurchFeePercentage": 31.56,
                     "municipalityTaxPercentage": 20.49,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.4
                  },
                  {
                     "townshipCode": "12 14  02",
                     "township": "SVALÖV",
                     "sumOfPercentagesInclChurchFeePercentage": 32.91,
                     "sumOfPercentagesExclChurchFeePercentage": 31.64,
                     "municipalityTaxPercentage": 20.49,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.46,
                     "churchFeePercentage": 1.27
                  },
                  {
                     "townshipCode": "12 14  10",
                     "township": "TECKOMATORP",
                     "sumOfPercentagesInclChurchFeePercentage": 32.91,
                     "sumOfPercentagesExclChurchFeePercentage": 31.64,
                     "municipalityTaxPercentage": 20.49,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.46,
                     "churchFeePercentage": 1.27
                  }
               ]
            },
            {
               "municipality": "SVEDALA",
               "townships": [
                  {
                     "townshipCode": "12 63  01",
                     "township": "SVEDALA",
                     "sumOfPercentagesInclChurchFeePercentage": 32.03,
                     "sumOfPercentagesExclChurchFeePercentage": 31.15,
                     "municipalityTaxPercentage": 20.24,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 0.88
                  },
                  {
                     "townshipCode": "12 63  07",
                     "township": "VÄRBY",
                     "sumOfPercentagesInclChurchFeePercentage": 32.06,
                     "sumOfPercentagesExclChurchFeePercentage": 31.14,
                     "municipalityTaxPercentage": 20.24,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.21,
                     "churchFeePercentage": 0.92
                  }
               ]
            },
            {
               "municipality": "SVENLJUNGA",
               "townships": [
                  {
                     "townshipCode": "14 65  06",
                     "township": "KINDAHOLM",
                     "sumOfPercentagesInclChurchFeePercentage": 35.4,
                     "sumOfPercentagesExclChurchFeePercentage": 33.94,
                     "municipalityTaxPercentage": 22.15,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 1.46
                  },
                  {
                     "townshipCode": "14 65  03",
                     "township": "MJÖBÄCK-HOLSLJUNGA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.4,
                     "sumOfPercentagesExclChurchFeePercentage": 33.94,
                     "municipalityTaxPercentage": 22.15,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 1.46
                  },
                  {
                     "townshipCode": "14 65  12",
                     "township": "SEXDREGA, DEL",
                     "sumOfPercentagesInclChurchFeePercentage": 35.4,
                     "sumOfPercentagesExclChurchFeePercentage": 33.94,
                     "municipalityTaxPercentage": 22.15,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 1.46
                  },
                  {
                     "townshipCode": "14 65  01",
                     "township": "SVENLJUNGABYGDEN",
                     "sumOfPercentagesInclChurchFeePercentage": 35.4,
                     "sumOfPercentagesExclChurchFeePercentage": 33.94,
                     "municipalityTaxPercentage": 22.15,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 1.46
                  }
               ]
            },
            {
               "municipality": "SÄFFLE",
               "townships": [
                  {
                     "townshipCode": "17 85  03",
                     "township": "BRO",
                     "sumOfPercentagesInclChurchFeePercentage": 34.77,
                     "sumOfPercentagesExclChurchFeePercentage": 33.63,
                     "municipalityTaxPercentage": 22,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.14
                  },
                  {
                     "townshipCode": "17 85  09",
                     "township": "GILLBERGA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.77,
                     "sumOfPercentagesExclChurchFeePercentage": 33.63,
                     "municipalityTaxPercentage": 22,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.14
                  },
                  {
                     "townshipCode": "17 85  10",
                     "township": "KILA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.77,
                     "sumOfPercentagesExclChurchFeePercentage": 33.63,
                     "municipalityTaxPercentage": 22,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.14
                  },
                  {
                     "townshipCode": "17 85  12",
                     "township": "LÅNGSERUD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.77,
                     "sumOfPercentagesExclChurchFeePercentage": 33.63,
                     "municipalityTaxPercentage": 22,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.14
                  },
                  {
                     "townshipCode": "17 85  08",
                     "township": "NY-HUGGENÄS",
                     "sumOfPercentagesInclChurchFeePercentage": 34.77,
                     "sumOfPercentagesExclChurchFeePercentage": 33.63,
                     "municipalityTaxPercentage": 22,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.14
                  },
                  {
                     "townshipCode": "17 85  11",
                     "township": "SVANSKOG",
                     "sumOfPercentagesInclChurchFeePercentage": 34.77,
                     "sumOfPercentagesExclChurchFeePercentage": 33.63,
                     "municipalityTaxPercentage": 22,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.14
                  },
                  {
                     "townshipCode": "17 85  01",
                     "township": "SÄFFLE",
                     "sumOfPercentagesInclChurchFeePercentage": 34.77,
                     "sumOfPercentagesExclChurchFeePercentage": 33.63,
                     "municipalityTaxPercentage": 22,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.14
                  },
                  {
                     "townshipCode": "17 85  04",
                     "township": "SÖDRA VÄRMLANDSNÄS",
                     "sumOfPercentagesInclChurchFeePercentage": 34.77,
                     "sumOfPercentagesExclChurchFeePercentage": 33.63,
                     "municipalityTaxPercentage": 22,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.14
                  },
                  {
                     "townshipCode": "17 85  02",
                     "township": "TVETA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.77,
                     "sumOfPercentagesExclChurchFeePercentage": 33.63,
                     "municipalityTaxPercentage": 22,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.14
                  }
               ]
            },
            {
               "municipality": "SÄTER",
               "townships": [
                  {
                     "townshipCode": "20 82  01",
                     "township": "SÄTERBYGDEN",
                     "sumOfPercentagesInclChurchFeePercentage": 35.53,
                     "sumOfPercentagesExclChurchFeePercentage": 34.26,
                     "municipalityTaxPercentage": 22.79,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 1.27
                  }
               ]
            },
            {
               "municipality": "SÄVSJÖ",
               "townships": [
                  {
                     "townshipCode": "06 84  06",
                     "township": "HJÄLMSERYD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.75,
                     "sumOfPercentagesExclChurchFeePercentage": 33.5,
                     "municipalityTaxPercentage": 21.92,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "06 84  08",
                     "township": "HULTSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.75,
                     "sumOfPercentagesExclChurchFeePercentage": 33.5,
                     "municipalityTaxPercentage": 21.92,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "06 84  07",
                     "township": "STOCKARYD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.75,
                     "sumOfPercentagesExclChurchFeePercentage": 33.5,
                     "municipalityTaxPercentage": 21.92,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "06 84  01",
                     "township": "SÄVSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.75,
                     "sumOfPercentagesExclChurchFeePercentage": 33.5,
                     "municipalityTaxPercentage": 21.92,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "06 84  03",
                     "township": "VRIGSTAD-HYLLETOFTA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.75,
                     "sumOfPercentagesExclChurchFeePercentage": 33.5,
                     "municipalityTaxPercentage": 21.92,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.25
                  }
               ]
            },
            {
               "municipality": "SÖDERHAMN",
               "townships": [
                  {
                     "townshipCode": "21 82  04",
                     "township": "LJUSNE",
                     "sumOfPercentagesInclChurchFeePercentage": 34.57,
                     "sumOfPercentagesExclChurchFeePercentage": 33.6,
                     "municipalityTaxPercentage": 21.66,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 0.97
                  },
                  {
                     "townshipCode": "21 82  06",
                     "township": "MO-BERGVIK",
                     "sumOfPercentagesInclChurchFeePercentage": 34.57,
                     "sumOfPercentagesExclChurchFeePercentage": 33.6,
                     "municipalityTaxPercentage": 21.66,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 0.97
                  },
                  {
                     "townshipCode": "21 82  09",
                     "township": "NORRALA-TRÖNÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.47,
                     "sumOfPercentagesExclChurchFeePercentage": 33.55,
                     "municipalityTaxPercentage": 21.66,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 0.92
                  },
                  {
                     "townshipCode": "21 82  02",
                     "township": "SANDARNE",
                     "sumOfPercentagesInclChurchFeePercentage": 34.51,
                     "sumOfPercentagesExclChurchFeePercentage": 33.5,
                     "municipalityTaxPercentage": 21.66,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.01
                  },
                  {
                     "townshipCode": "21 82  03",
                     "township": "SKOG",
                     "sumOfPercentagesInclChurchFeePercentage": 34.57,
                     "sumOfPercentagesExclChurchFeePercentage": 33.6,
                     "municipalityTaxPercentage": 21.66,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 0.97
                  },
                  {
                     "townshipCode": "21 82  05",
                     "township": "SÖDERALA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.57,
                     "sumOfPercentagesExclChurchFeePercentage": 33.6,
                     "municipalityTaxPercentage": 21.66,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 0.97
                  },
                  {
                     "townshipCode": "21 82  01",
                     "township": "SÖDERHAMN",
                     "sumOfPercentagesInclChurchFeePercentage": 34.51,
                     "sumOfPercentagesExclChurchFeePercentage": 33.5,
                     "municipalityTaxPercentage": 21.66,
                     "countyTaxPercentage": 11.51,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.01
                  }
               ]
            },
            {
               "municipality": "SÖDERKÖPING",
               "townships": [
                  {
                     "townshipCode": "05 82  01",
                     "township": "SÖDERKÖPING S:T ANNA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.58,
                     "sumOfPercentagesExclChurchFeePercentage": 32.165,
                     "municipalityTaxPercentage": 21.18,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.285,
                     "churchFeePercentage": 1.415
                  },
                  {
                     "townshipCode": "05 82  04",
                     "township": "ÖSTRA RYD",
                     "sumOfPercentagesInclChurchFeePercentage": 33.71,
                     "sumOfPercentagesExclChurchFeePercentage": 32.16,
                     "municipalityTaxPercentage": 21.18,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.55
                  }
               ]
            },
            {
               "municipality": "SÖDERTÄLJE",
               "townships": [
                  {
                     "townshipCode": "01 81  04",
                     "township": "ENHÖRNA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.27,
                     "sumOfPercentagesExclChurchFeePercentage": 32.39,
                     "municipalityTaxPercentage": 20.13,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.16,
                     "churchFeePercentage": 0.88
                  },
                  {
                     "townshipCode": "01 81  10",
                     "township": "HÖLÖ-MÖRKÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 33.58,
                     "sumOfPercentagesExclChurchFeePercentage": 32.47,
                     "municipalityTaxPercentage": 20.13,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1.11
                  },
                  {
                     "townshipCode": "01 81  01",
                     "township": "SÖDERTÄLJE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.37,
                     "sumOfPercentagesExclChurchFeePercentage": 32.48,
                     "municipalityTaxPercentage": 20.13,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 0.89
                  },
                  {
                     "townshipCode": "01 81  06",
                     "township": "VÅRDINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.52,
                     "sumOfPercentagesExclChurchFeePercentage": 32.45,
                     "municipalityTaxPercentage": 20.13,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 1.07
                  },
                  {
                     "townshipCode": "01 81  08",
                     "township": "YTTERJÄRNA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.52,
                     "sumOfPercentagesExclChurchFeePercentage": 32.45,
                     "municipalityTaxPercentage": 20.13,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 1.07
                  },
                  {
                     "townshipCode": "01 81  02",
                     "township": "ÖSTERTÄLJE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.37,
                     "sumOfPercentagesExclChurchFeePercentage": 32.48,
                     "municipalityTaxPercentage": 20.13,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 0.89
                  },
                  {
                     "townshipCode": "01 81  07",
                     "township": "ÖVERJÄRNA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.52,
                     "sumOfPercentagesExclChurchFeePercentage": 32.45,
                     "municipalityTaxPercentage": 20.13,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 1.07
                  }
               ]
            },
            {
               "municipality": "SÖLVESBORG",
               "townships": [
                  {
                     "townshipCode": "10 83  04",
                     "township": "MJÄLLBY",
                     "sumOfPercentagesInclChurchFeePercentage": 34.79,
                     "sumOfPercentagesExclChurchFeePercentage": 33.72,
                     "municipalityTaxPercentage": 22.27,
                     "countyTaxPercentage": 11.19,
                     "funeralFeePercentage": 0.26,
                     "churchFeePercentage": 1.07
                  },
                  {
                     "townshipCode": "10 83  01",
                     "township": "SÖLVESBORG",
                     "sumOfPercentagesInclChurchFeePercentage": 34.61,
                     "sumOfPercentagesExclChurchFeePercentage": 33.7,
                     "municipalityTaxPercentage": 22.27,
                     "countyTaxPercentage": 11.19,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 0.91
                  }
               ]
            },
            {
               "municipality": "TANUM",
               "townships": [
                  {
                     "townshipCode": "14 35  08",
                     "township": "BOTTNA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.13,
                     "sumOfPercentagesExclChurchFeePercentage": 33.47,
                     "municipalityTaxPercentage": 21.56,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.66
                  },
                  {
                     "townshipCode": "14 35  07",
                     "township": "FJÄLLBACKA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.13,
                     "sumOfPercentagesExclChurchFeePercentage": 33.47,
                     "municipalityTaxPercentage": 21.56,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.66
                  },
                  {
                     "townshipCode": "14 35  06",
                     "township": "KVILLE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.13,
                     "sumOfPercentagesExclChurchFeePercentage": 33.47,
                     "municipalityTaxPercentage": 21.56,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.66
                  },
                  {
                     "townshipCode": "14 35  03",
                     "township": "LUR",
                     "sumOfPercentagesInclChurchFeePercentage": 34.63,
                     "sumOfPercentagesExclChurchFeePercentage": 33.38,
                     "municipalityTaxPercentage": 21.56,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.34,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "14 35  04",
                     "township": "NAVERSTAD-MO",
                     "sumOfPercentagesInclChurchFeePercentage": 34.63,
                     "sumOfPercentagesExclChurchFeePercentage": 33.38,
                     "municipalityTaxPercentage": 21.56,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.34,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "14 35  09",
                     "township": "SVENNEBY",
                     "sumOfPercentagesInclChurchFeePercentage": 35.13,
                     "sumOfPercentagesExclChurchFeePercentage": 33.47,
                     "municipalityTaxPercentage": 21.56,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.66
                  },
                  {
                     "townshipCode": "14 35  02",
                     "township": "TANUM",
                     "sumOfPercentagesInclChurchFeePercentage": 34.63,
                     "sumOfPercentagesExclChurchFeePercentage": 33.38,
                     "municipalityTaxPercentage": 21.56,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.34,
                     "churchFeePercentage": 1.25
                  }
               ]
            },
            {
               "municipality": "TIBRO",
               "townships": [
                  {
                     "townshipCode": "14 72  02",
                     "township": "RANSBERG",
                     "sumOfPercentagesInclChurchFeePercentage": 33.98,
                     "sumOfPercentagesExclChurchFeePercentage": 32.96,
                     "municipalityTaxPercentage": 21.21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.02
                  },
                  {
                     "townshipCode": "14 72  01",
                     "township": "TIBRO",
                     "sumOfPercentagesInclChurchFeePercentage": 33.98,
                     "sumOfPercentagesExclChurchFeePercentage": 32.96,
                     "municipalityTaxPercentage": 21.21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.02
                  }
               ]
            },
            {
               "municipality": "TIDAHOLM",
               "townships": [
                  {
                     "townshipCode": "14 98  07",
                     "township": "FRÖJERED",
                     "sumOfPercentagesInclChurchFeePercentage": 35.1,
                     "sumOfPercentagesExclChurchFeePercentage": 33.92,
                     "municipalityTaxPercentage": 22.07,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.37,
                     "churchFeePercentage": 1.18
                  },
                  {
                     "townshipCode": "14 98  03",
                     "township": "HÖKENSÅS",
                     "sumOfPercentagesInclChurchFeePercentage": 35.1,
                     "sumOfPercentagesExclChurchFeePercentage": 33.92,
                     "municipalityTaxPercentage": 22.07,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.37,
                     "churchFeePercentage": 1.18
                  },
                  {
                     "townshipCode": "14 98  01",
                     "township": "TIDAHOLM",
                     "sumOfPercentagesInclChurchFeePercentage": 35.1,
                     "sumOfPercentagesExclChurchFeePercentage": 33.92,
                     "municipalityTaxPercentage": 22.07,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.37,
                     "churchFeePercentage": 1.18
                  },
                  {
                     "townshipCode": "14 98  12",
                     "township": "VALSTAD",
                     "sumOfPercentagesInclChurchFeePercentage": 35.1,
                     "sumOfPercentagesExclChurchFeePercentage": 33.92,
                     "municipalityTaxPercentage": 22.07,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.37,
                     "churchFeePercentage": 1.18
                  },
                  {
                     "townshipCode": "14 98  16",
                     "township": "VARV",
                     "sumOfPercentagesInclChurchFeePercentage": 35.1,
                     "sumOfPercentagesExclChurchFeePercentage": 33.92,
                     "municipalityTaxPercentage": 22.07,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.37,
                     "churchFeePercentage": 1.18
                  }
               ]
            },
            {
               "municipality": "TIERP",
               "townships": [
                  {
                     "townshipCode": "03 60  08",
                     "township": "HÅLLNÄS-ÖSTERLÖVSTA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.92,
                     "sumOfPercentagesExclChurchFeePercentage": 32.48,
                     "municipalityTaxPercentage": 20.99,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.44
                  },
                  {
                     "townshipCode": "03 60  05",
                     "township": "TIERP-SÖDERFORS",
                     "sumOfPercentagesInclChurchFeePercentage": 33.75,
                     "sumOfPercentagesExclChurchFeePercentage": 32.47,
                     "municipalityTaxPercentage": 20.99,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.28
                  },
                  {
                     "townshipCode": "03 60  01",
                     "township": "TOLFTA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.92,
                     "sumOfPercentagesExclChurchFeePercentage": 32.48,
                     "municipalityTaxPercentage": 20.99,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.44
                  },
                  {
                     "townshipCode": "03 60  03",
                     "township": "VENDEL-TEGELSMORA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.98,
                     "sumOfPercentagesExclChurchFeePercentage": 32.47,
                     "municipalityTaxPercentage": 20.99,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.51
                  },
                  {
                     "townshipCode": "03 60  07",
                     "township": "VÄSTLAND",
                     "sumOfPercentagesInclChurchFeePercentage": 33.92,
                     "sumOfPercentagesExclChurchFeePercentage": 32.48,
                     "municipalityTaxPercentage": 20.99,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.44
                  }
               ]
            },
            {
               "municipality": "TIMRÅ",
               "townships": [
                  {
                     "townshipCode": "22 62  03",
                     "township": "HÄSSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 35,
                     "sumOfPercentagesExclChurchFeePercentage": 33.71,
                     "municipalityTaxPercentage": 22.64,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.29
                  },
                  {
                     "townshipCode": "22 62  02",
                     "township": "LJUSTORP",
                     "sumOfPercentagesInclChurchFeePercentage": 35,
                     "sumOfPercentagesExclChurchFeePercentage": 33.71,
                     "municipalityTaxPercentage": 22.64,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.29
                  },
                  {
                     "townshipCode": "22 62  01",
                     "township": "TIMRÅ",
                     "sumOfPercentagesInclChurchFeePercentage": 35,
                     "sumOfPercentagesExclChurchFeePercentage": 33.68,
                     "municipalityTaxPercentage": 22.64,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.32
                  },
                  {
                     "townshipCode": "22 62  04",
                     "township": "TYNDERÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 35,
                     "sumOfPercentagesExclChurchFeePercentage": 33.71,
                     "municipalityTaxPercentage": 22.64,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.29
                  }
               ]
            },
            {
               "municipality": "TINGSRYD",
               "townships": [
                  {
                     "townshipCode": "07 63  02",
                     "township": "ALMUNDSRYD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.45,
                     "sumOfPercentagesExclChurchFeePercentage": 33.1,
                     "municipalityTaxPercentage": 21.07,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.35
                  },
                  {
                     "townshipCode": "07 63  04",
                     "township": "LINNERYD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.45,
                     "sumOfPercentagesExclChurchFeePercentage": 33.1,
                     "municipalityTaxPercentage": 21.07,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.35
                  },
                  {
                     "townshipCode": "07 63  05",
                     "township": "SÖDRA SANDSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.45,
                     "sumOfPercentagesExclChurchFeePercentage": 33.1,
                     "municipalityTaxPercentage": 21.07,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.35
                  },
                  {
                     "townshipCode": "07 63  01",
                     "township": "TINGSÅS",
                     "sumOfPercentagesInclChurchFeePercentage": 34.45,
                     "sumOfPercentagesExclChurchFeePercentage": 33.1,
                     "municipalityTaxPercentage": 21.07,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.35
                  },
                  {
                     "townshipCode": "07 63  07",
                     "township": "URSHULT",
                     "sumOfPercentagesInclChurchFeePercentage": 34.45,
                     "sumOfPercentagesExclChurchFeePercentage": 33.1,
                     "municipalityTaxPercentage": 21.07,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.35
                  },
                  {
                     "townshipCode": "07 63  06",
                     "township": "VÄCKELSÅNG",
                     "sumOfPercentagesInclChurchFeePercentage": 34.45,
                     "sumOfPercentagesExclChurchFeePercentage": 33.1,
                     "municipalityTaxPercentage": 21.07,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.35
                  },
                  {
                     "townshipCode": "07 63  03",
                     "township": "ÄLMEBODA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.45,
                     "sumOfPercentagesExclChurchFeePercentage": 33.1,
                     "municipalityTaxPercentage": 21.07,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.35
                  }
               ]
            },
            {
               "municipality": "TJÖRN",
               "townships": [
                  {
                     "townshipCode": "14 19  05",
                     "township": "KLÖVEDAL",
                     "sumOfPercentagesInclChurchFeePercentage": 34.19,
                     "sumOfPercentagesExclChurchFeePercentage": 32.93,
                     "municipalityTaxPercentage": 21.21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1.26
                  },
                  {
                     "townshipCode": "14 19  03",
                     "township": "RÖNNÄNG",
                     "sumOfPercentagesInclChurchFeePercentage": 34.19,
                     "sumOfPercentagesExclChurchFeePercentage": 32.93,
                     "municipalityTaxPercentage": 21.21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1.26
                  },
                  {
                     "townshipCode": "14 19  02",
                     "township": "STENKYRKA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.19,
                     "sumOfPercentagesExclChurchFeePercentage": 32.93,
                     "municipalityTaxPercentage": 21.21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1.26
                  },
                  {
                     "townshipCode": "14 19  01",
                     "township": "VALLA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.19,
                     "sumOfPercentagesExclChurchFeePercentage": 32.93,
                     "municipalityTaxPercentage": 21.21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1.26
                  }
               ]
            },
            {
               "municipality": "TOMELILLA",
               "townships": [
                  {
                     "townshipCode": "12 70  14",
                     "township": "BRÖSARP-TRANÅS",
                     "sumOfPercentagesInclChurchFeePercentage": 33.03,
                     "sumOfPercentagesExclChurchFeePercentage": 31.71,
                     "municipalityTaxPercentage": 20.61,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.41,
                     "churchFeePercentage": 1.32
                  },
                  {
                     "townshipCode": "12 70  09",
                     "township": "SMEDSTORP",
                     "sumOfPercentagesInclChurchFeePercentage": 33.28,
                     "sumOfPercentagesExclChurchFeePercentage": 31.84,
                     "municipalityTaxPercentage": 20.61,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.54,
                     "churchFeePercentage": 1.44
                  },
                  {
                     "townshipCode": "12 70  05",
                     "township": "TOMELILLABYGDEN",
                     "sumOfPercentagesInclChurchFeePercentage": 32.82,
                     "sumOfPercentagesExclChurchFeePercentage": 31.71,
                     "municipalityTaxPercentage": 20.61,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.41,
                     "churchFeePercentage": 1.11
                  }
               ]
            },
            {
               "municipality": "TORSBY",
               "townships": [
                  {
                     "townshipCode": "17 37  01",
                     "township": "FRYKSÄNDE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.42,
                     "sumOfPercentagesExclChurchFeePercentage": 34.18,
                     "municipalityTaxPercentage": 22.5,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.24
                  },
                  {
                     "townshipCode": "17 37  02",
                     "township": "LEKVATTNET",
                     "sumOfPercentagesInclChurchFeePercentage": 35.42,
                     "sumOfPercentagesExclChurchFeePercentage": 34.18,
                     "municipalityTaxPercentage": 22.5,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.24
                  },
                  {
                     "townshipCode": "17 37  03",
                     "township": "VITSAND",
                     "sumOfPercentagesInclChurchFeePercentage": 35.42,
                     "sumOfPercentagesExclChurchFeePercentage": 34.18,
                     "municipalityTaxPercentage": 22.5,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.24
                  },
                  {
                     "townshipCode": "17 37  05",
                     "township": "ÖSTMARK",
                     "sumOfPercentagesInclChurchFeePercentage": 35.42,
                     "sumOfPercentagesExclChurchFeePercentage": 34.18,
                     "municipalityTaxPercentage": 22.5,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.24
                  },
                  {
                     "townshipCode": "17 37  08",
                     "township": "ÖVRE ÄLVDAL",
                     "sumOfPercentagesInclChurchFeePercentage": 35.45,
                     "sumOfPercentagesExclChurchFeePercentage": 34.46,
                     "municipalityTaxPercentage": 22.5,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.76,
                     "churchFeePercentage": 0.99
                  }
               ]
            },
            {
               "municipality": "TORSÅS",
               "townships": [
                  {
                     "townshipCode": "08 34  01",
                     "township": "GULLABO",
                     "sumOfPercentagesInclChurchFeePercentage": 34.33,
                     "sumOfPercentagesExclChurchFeePercentage": 33.1,
                     "municipalityTaxPercentage": 21.43,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.23
                  },
                  {
                     "townshipCode": "08 34  04",
                     "township": "SÖDERÅKRA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.33,
                     "sumOfPercentagesExclChurchFeePercentage": 33.1,
                     "municipalityTaxPercentage": 21.43,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.23
                  },
                  {
                     "townshipCode": "08 34  02",
                     "township": "TORSÅS",
                     "sumOfPercentagesInclChurchFeePercentage": 34.33,
                     "sumOfPercentagesExclChurchFeePercentage": 33.1,
                     "municipalityTaxPercentage": 21.43,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.23
                  }
               ]
            },
            {
               "municipality": "TRANEMO",
               "townships": [
                  {
                     "townshipCode": "14 52  08",
                     "township": "DALSTORP",
                     "sumOfPercentagesInclChurchFeePercentage": 34.25,
                     "sumOfPercentagesExclChurchFeePercentage": 32.79,
                     "municipalityTaxPercentage": 21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 1.46
                  },
                  {
                     "townshipCode": "14 52  06",
                     "township": "LÄNGHEM, DEL",
                     "sumOfPercentagesInclChurchFeePercentage": 34.25,
                     "sumOfPercentagesExclChurchFeePercentage": 32.79,
                     "municipalityTaxPercentage": 21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 1.46
                  },
                  {
                     "townshipCode": "14 52  01",
                     "township": "TRANEMO",
                     "sumOfPercentagesInclChurchFeePercentage": 34.25,
                     "sumOfPercentagesExclChurchFeePercentage": 32.79,
                     "municipalityTaxPercentage": 21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 1.46
                  }
               ]
            },
            {
               "municipality": "TRANÅS",
               "townships": [
                  {
                     "townshipCode": "06 87  02",
                     "township": "ADELÖV",
                     "sumOfPercentagesInclChurchFeePercentage": 33.91,
                     "sumOfPercentagesExclChurchFeePercentage": 32.91,
                     "municipalityTaxPercentage": 21.41,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1
                  },
                  {
                     "townshipCode": "06 87  03",
                     "township": "LINDERÅS",
                     "sumOfPercentagesInclChurchFeePercentage": 33.91,
                     "sumOfPercentagesExclChurchFeePercentage": 32.91,
                     "municipalityTaxPercentage": 21.41,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1
                  },
                  {
                     "townshipCode": "06 87  01",
                     "township": "SÄBY",
                     "sumOfPercentagesInclChurchFeePercentage": 33.91,
                     "sumOfPercentagesExclChurchFeePercentage": 32.91,
                     "municipalityTaxPercentage": 21.41,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1
                  }
               ]
            },
            {
               "municipality": "TRELLEBORG",
               "townships": [
                  {
                     "townshipCode": "12 87  31",
                     "township": "ANDERSLÖV",
                     "sumOfPercentagesInclChurchFeePercentage": 32.58,
                     "sumOfPercentagesExclChurchFeePercentage": 31.45,
                     "municipalityTaxPercentage": 20.36,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.13
                  },
                  {
                     "townshipCode": "12 87  15",
                     "township": "DALKÖPINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 32.32,
                     "sumOfPercentagesExclChurchFeePercentage": 31.35,
                     "municipalityTaxPercentage": 20.36,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 0.97
                  },
                  {
                     "townshipCode": "12 87  06",
                     "township": "HAMMARLÖV",
                     "sumOfPercentagesInclChurchFeePercentage": 32.62,
                     "sumOfPercentagesExclChurchFeePercentage": 31.5,
                     "municipalityTaxPercentage": 20.36,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "12 87  21",
                     "township": "KÄLLSTORP",
                     "sumOfPercentagesInclChurchFeePercentage": 32.63,
                     "sumOfPercentagesExclChurchFeePercentage": 31.51,
                     "municipalityTaxPercentage": 20.36,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.46,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "12 87  01",
                     "township": "TRELLEBORG",
                     "sumOfPercentagesInclChurchFeePercentage": 32.12,
                     "sumOfPercentagesExclChurchFeePercentage": 31.41,
                     "municipalityTaxPercentage": 20.36,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 0.71
                  }
               ]
            },
            {
               "municipality": "TROLLHÄTTAN",
               "townships": [
                  {
                     "townshipCode": "14 88  08",
                     "township": "BJÄRKE, DEL",
                     "sumOfPercentagesInclChurchFeePercentage": 34.95,
                     "sumOfPercentagesExclChurchFeePercentage": 33.45,
                     "municipalityTaxPercentage": 21.56,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.41,
                     "churchFeePercentage": 1.5
                  },
                  {
                     "townshipCode": "14 88  07",
                     "township": "FORS-ROMMELE",
                     "sumOfPercentagesInclChurchFeePercentage": 34.48,
                     "sumOfPercentagesExclChurchFeePercentage": 33.36,
                     "municipalityTaxPercentage": 21.56,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "14 88  04",
                     "township": "GÄRDHEM",
                     "sumOfPercentagesInclChurchFeePercentage": 34.6,
                     "sumOfPercentagesExclChurchFeePercentage": 33.38,
                     "municipalityTaxPercentage": 21.56,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.34,
                     "churchFeePercentage": 1.22
                  },
                  {
                     "townshipCode": "14 88  10",
                     "township": "GÖTALUNDEN",
                     "sumOfPercentagesInclChurchFeePercentage": 34.29,
                     "sumOfPercentagesExclChurchFeePercentage": 33.27,
                     "municipalityTaxPercentage": 21.56,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 1.02
                  },
                  {
                     "townshipCode": "14 88  09",
                     "township": "LEXTORP",
                     "sumOfPercentagesInclChurchFeePercentage": 34.29,
                     "sumOfPercentagesExclChurchFeePercentage": 33.27,
                     "municipalityTaxPercentage": 21.56,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 1.02
                  },
                  {
                     "townshipCode": "14 88  01",
                     "township": "TROLLHÄTTAN",
                     "sumOfPercentagesInclChurchFeePercentage": 34.29,
                     "sumOfPercentagesExclChurchFeePercentage": 33.27,
                     "municipalityTaxPercentage": 21.56,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 1.02
                  },
                  {
                     "townshipCode": "14 88  05",
                     "township": "UPPHÄRAD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.48,
                     "sumOfPercentagesExclChurchFeePercentage": 33.36,
                     "municipalityTaxPercentage": 21.56,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "14 88  03",
                     "township": "ÅSAKA-BJÖRKE",
                     "sumOfPercentagesInclChurchFeePercentage": 34.6,
                     "sumOfPercentagesExclChurchFeePercentage": 33.38,
                     "municipalityTaxPercentage": 21.56,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.34,
                     "churchFeePercentage": 1.22
                  }
               ]
            },
            {
               "municipality": "TROSA",
               "townships": [
                  {
                     "townshipCode": "04 88  02",
                     "township": "TROSA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.18,
                     "sumOfPercentagesExclChurchFeePercentage": 32.21,
                     "municipalityTaxPercentage": 21.26,
                     "countyTaxPercentage": 10.77,
                     "funeralFeePercentage": 0.18,
                     "churchFeePercentage": 0.97
                  }
               ]
            },
            {
               "municipality": "TYRESÖ",
               "townships": [
                  {
                     "townshipCode": "01 38  01",
                     "township": "TYRESÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 32.52,
                     "sumOfPercentagesExclChurchFeePercentage": 31.7,
                     "municipalityTaxPercentage": 19.48,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.12,
                     "churchFeePercentage": 0.82
                  }
               ]
            },
            {
               "municipality": "TÄBY",
               "townships": [
                  {
                     "townshipCode": "01 60  01",
                     "township": "TÄBY",
                     "sumOfPercentagesInclChurchFeePercentage": 30.7,
                     "sumOfPercentagesExclChurchFeePercentage": 29.92,
                     "municipalityTaxPercentage": 17.63,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.19,
                     "churchFeePercentage": 0.78
                  }
               ]
            },
            {
               "municipality": "TÖREBODA",
               "townships": [
                  {
                     "townshipCode": "14 73  02",
                     "township": "FREDSBERG-BÄCK",
                     "sumOfPercentagesInclChurchFeePercentage": 34.45,
                     "sumOfPercentagesExclChurchFeePercentage": 33.18,
                     "municipalityTaxPercentage": 21.22,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.27
                  },
                  {
                     "townshipCode": "14 73  07",
                     "township": "FÄGRE",
                     "sumOfPercentagesInclChurchFeePercentage": 34.45,
                     "sumOfPercentagesExclChurchFeePercentage": 33.18,
                     "municipalityTaxPercentage": 21.22,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.27
                  },
                  {
                     "townshipCode": "14 73  13",
                     "township": "HOVA-ÄLGARÅS, DEL",
                     "sumOfPercentagesInclChurchFeePercentage": 34.45,
                     "sumOfPercentagesExclChurchFeePercentage": 33.18,
                     "municipalityTaxPercentage": 21.22,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.27
                  },
                  {
                     "townshipCode": "14 73  01",
                     "township": "TÖREBODA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.45,
                     "sumOfPercentagesExclChurchFeePercentage": 33.18,
                     "municipalityTaxPercentage": 21.22,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.48,
                     "churchFeePercentage": 1.27
                  }
               ]
            },
            {
               "municipality": "UDDEVALLA",
               "townships": [
                  {
                     "townshipCode": "14 85  09",
                     "township": "BOKENÄSET",
                     "sumOfPercentagesInclChurchFeePercentage": 35.29,
                     "sumOfPercentagesExclChurchFeePercentage": 33.98,
                     "municipalityTaxPercentage": 22.16,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.34,
                     "churchFeePercentage": 1.31
                  },
                  {
                     "townshipCode": "14 85  12",
                     "township": "BÄVE",
                     "sumOfPercentagesInclChurchFeePercentage": 34.99,
                     "sumOfPercentagesExclChurchFeePercentage": 33.9,
                     "municipalityTaxPercentage": 22.16,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.26,
                     "churchFeePercentage": 1.09
                  },
                  {
                     "townshipCode": "14 85  13",
                     "township": "DALABERG",
                     "sumOfPercentagesInclChurchFeePercentage": 34.99,
                     "sumOfPercentagesExclChurchFeePercentage": 33.9,
                     "municipalityTaxPercentage": 22.16,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.26,
                     "churchFeePercentage": 1.09
                  },
                  {
                     "townshipCode": "14 85  10",
                     "township": "HERRESTAD",
                     "sumOfPercentagesInclChurchFeePercentage": 35.06,
                     "sumOfPercentagesExclChurchFeePercentage": 33.86,
                     "municipalityTaxPercentage": 22.16,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 1.2
                  },
                  {
                     "townshipCode": "14 85  11",
                     "township": "LANE-RYR",
                     "sumOfPercentagesInclChurchFeePercentage": 34.99,
                     "sumOfPercentagesExclChurchFeePercentage": 33.9,
                     "municipalityTaxPercentage": 22.16,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.26,
                     "churchFeePercentage": 1.09
                  },
                  {
                     "townshipCode": "14 85  03",
                     "township": "LJUNGSKILE",
                     "sumOfPercentagesInclChurchFeePercentage": 34.96,
                     "sumOfPercentagesExclChurchFeePercentage": 33.94,
                     "municipalityTaxPercentage": 22.16,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.02
                  },
                  {
                     "townshipCode": "14 85  01",
                     "township": "UDDEVALLA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.99,
                     "sumOfPercentagesExclChurchFeePercentage": 33.9,
                     "municipalityTaxPercentage": 22.16,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.26,
                     "churchFeePercentage": 1.09
                  }
               ]
            },
            {
               "municipality": "ULRICEHAMN",
               "townships": [
                  {
                     "townshipCode": "14 91  05",
                     "township": "HÄLLSTAD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.18,
                     "sumOfPercentagesExclChurchFeePercentage": 32.93,
                     "municipalityTaxPercentage": 21.05,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "14 91  20",
                     "township": "HÖSSNA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.07,
                     "sumOfPercentagesExclChurchFeePercentage": 32.78,
                     "municipalityTaxPercentage": 21.05,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.29
                  },
                  {
                     "townshipCode": "14 91  28",
                     "township": "REDVÄG",
                     "sumOfPercentagesInclChurchFeePercentage": 34.38,
                     "sumOfPercentagesExclChurchFeePercentage": 32.89,
                     "municipalityTaxPercentage": 21.05,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.49
                  },
                  {
                     "townshipCode": "14 91  10",
                     "township": "SÖDRA VING",
                     "sumOfPercentagesInclChurchFeePercentage": 34.18,
                     "sumOfPercentagesExclChurchFeePercentage": 32.93,
                     "municipalityTaxPercentage": 21.05,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "14 91  29",
                     "township": "TIMMELE",
                     "sumOfPercentagesInclChurchFeePercentage": 34.07,
                     "sumOfPercentagesExclChurchFeePercentage": 32.78,
                     "municipalityTaxPercentage": 21.05,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.29
                  },
                  {
                     "townshipCode": "14 91  01",
                     "township": "ULRICEHAMN",
                     "sumOfPercentagesInclChurchFeePercentage": 34.07,
                     "sumOfPercentagesExclChurchFeePercentage": 32.78,
                     "municipalityTaxPercentage": 21.05,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.29
                  },
                  {
                     "townshipCode": "14 91  16",
                     "township": "ÅSUNDEN",
                     "sumOfPercentagesInclChurchFeePercentage": 34.07,
                     "sumOfPercentagesExclChurchFeePercentage": 32.78,
                     "municipalityTaxPercentage": 21.05,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.29
                  }
               ]
            },
            {
               "municipality": "UMEÅ",
               "townships": [
                  {
                     "townshipCode": "24 80  06",
                     "township": "HOLMSUND",
                     "sumOfPercentagesInclChurchFeePercentage": 34.92,
                     "sumOfPercentagesExclChurchFeePercentage": 33.8,
                     "municipalityTaxPercentage": 22.8,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "24 80  07",
                     "township": "HÖRNEFORS",
                     "sumOfPercentagesInclChurchFeePercentage": 35.025,
                     "sumOfPercentagesExclChurchFeePercentage": 33.875,
                     "municipalityTaxPercentage": 22.8,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.275,
                     "churchFeePercentage": 1.15
                  },
                  {
                     "townshipCode": "24 80  09",
                     "township": "SÄVAR-HOLMÖN",
                     "sumOfPercentagesInclChurchFeePercentage": 35.069,
                     "sumOfPercentagesExclChurchFeePercentage": 33.85,
                     "municipalityTaxPercentage": 22.8,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.219
                  },
                  {
                     "townshipCode": "24 80  03",
                     "township": "TAVELSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.77,
                     "sumOfPercentagesExclChurchFeePercentage": 33.76,
                     "municipalityTaxPercentage": 22.8,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.16,
                     "churchFeePercentage": 1.01
                  },
                  {
                     "townshipCode": "24 80  04",
                     "township": "TEG",
                     "sumOfPercentagesInclChurchFeePercentage": 34.77,
                     "sumOfPercentagesExclChurchFeePercentage": 33.76,
                     "municipalityTaxPercentage": 22.8,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.16,
                     "churchFeePercentage": 1.01
                  },
                  {
                     "townshipCode": "24 80  02",
                     "township": "UMEÅ LANDSFÖRS.",
                     "sumOfPercentagesInclChurchFeePercentage": 34.77,
                     "sumOfPercentagesExclChurchFeePercentage": 33.76,
                     "municipalityTaxPercentage": 22.8,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.16,
                     "churchFeePercentage": 1.01
                  },
                  {
                     "townshipCode": "24 80  11",
                     "township": "UMEÅ MARIA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.77,
                     "sumOfPercentagesExclChurchFeePercentage": 33.76,
                     "municipalityTaxPercentage": 22.8,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.16,
                     "churchFeePercentage": 1.01
                  },
                  {
                     "townshipCode": "24 80  01",
                     "township": "UMEÅ STADSFÖRS.",
                     "sumOfPercentagesInclChurchFeePercentage": 34.77,
                     "sumOfPercentagesExclChurchFeePercentage": 33.76,
                     "municipalityTaxPercentage": 22.8,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.16,
                     "churchFeePercentage": 1.01
                  },
                  {
                     "townshipCode": "24 80  05",
                     "township": "ÅLIDHEM",
                     "sumOfPercentagesInclChurchFeePercentage": 34.77,
                     "sumOfPercentagesExclChurchFeePercentage": 33.76,
                     "municipalityTaxPercentage": 22.8,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.16,
                     "churchFeePercentage": 1.01
                  }
               ]
            },
            {
               "municipality": "UPPLANDS VÄSBY",
               "townships": [
                  {
                     "townshipCode": "01 14  01",
                     "township": "ED",
                     "sumOfPercentagesInclChurchFeePercentage": 32.65,
                     "sumOfPercentagesExclChurchFeePercentage": 31.76,
                     "municipalityTaxPercentage": 19.5,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.16,
                     "churchFeePercentage": 0.89
                  },
                  {
                     "townshipCode": "01 14  03",
                     "township": "FRESTA",
                     "sumOfPercentagesInclChurchFeePercentage": 32.52,
                     "sumOfPercentagesExclChurchFeePercentage": 31.72,
                     "municipalityTaxPercentage": 19.5,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.12,
                     "churchFeePercentage": 0.8
                  },
                  {
                     "townshipCode": "01 14  02",
                     "township": "HAMMARBY",
                     "sumOfPercentagesInclChurchFeePercentage": 32.52,
                     "sumOfPercentagesExclChurchFeePercentage": 31.68,
                     "municipalityTaxPercentage": 19.5,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.08,
                     "churchFeePercentage": 0.84
                  }
               ]
            },
            {
               "municipality": "UPPLANDS-BRO",
               "townships": [
                  {
                     "townshipCode": "01 39  01",
                     "township": "BRO",
                     "sumOfPercentagesInclChurchFeePercentage": 32.75,
                     "sumOfPercentagesExclChurchFeePercentage": 31.81,
                     "municipalityTaxPercentage": 19.58,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.13,
                     "churchFeePercentage": 0.94
                  },
                  {
                     "townshipCode": "01 39  03",
                     "township": "KUNGSÄNGEN-VÄSTRA RYD",
                     "sumOfPercentagesInclChurchFeePercentage": 32.72,
                     "sumOfPercentagesExclChurchFeePercentage": 31.84,
                     "municipalityTaxPercentage": 19.58,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.16,
                     "churchFeePercentage": 0.88
                  }
               ]
            },
            {
               "municipality": "UPPSALA",
               "townships": [
                  {
                     "townshipCode": "03 80  31",
                     "township": "ALMUNGE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.41,
                     "sumOfPercentagesExclChurchFeePercentage": 32.27,
                     "municipalityTaxPercentage": 20.84,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.14
                  },
                  {
                     "townshipCode": "03 80  09",
                     "township": "BALINGSTA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.43,
                     "sumOfPercentagesExclChurchFeePercentage": 32.23,
                     "municipalityTaxPercentage": 20.84,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 1.2
                  },
                  {
                     "townshipCode": "03 80  26",
                     "township": "BJÖRKLINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.48,
                     "sumOfPercentagesExclChurchFeePercentage": 32.26,
                     "municipalityTaxPercentage": 20.84,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.26,
                     "churchFeePercentage": 1.22
                  },
                  {
                     "townshipCode": "03 80  21",
                     "township": "BÄLINGEBYGDEN",
                     "sumOfPercentagesInclChurchFeePercentage": 33.35,
                     "sumOfPercentagesExclChurchFeePercentage": 32.2,
                     "municipalityTaxPercentage": 20.84,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 1.15
                  },
                  {
                     "townshipCode": "03 80  11",
                     "township": "DALBY",
                     "sumOfPercentagesInclChurchFeePercentage": 33.43,
                     "sumOfPercentagesExclChurchFeePercentage": 32.23,
                     "municipalityTaxPercentage": 20.84,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 1.2
                  },
                  {
                     "townshipCode": "03 80  05",
                     "township": "DANMARK-FUNBO",
                     "sumOfPercentagesInclChurchFeePercentage": 33.22,
                     "sumOfPercentagesExclChurchFeePercentage": 32.17,
                     "municipalityTaxPercentage": 20.84,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.17,
                     "churchFeePercentage": 1.05
                  },
                  {
                     "townshipCode": "03 80  30",
                     "township": "FARINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.41,
                     "sumOfPercentagesExclChurchFeePercentage": 32.27,
                     "municipalityTaxPercentage": 20.84,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.14
                  },
                  {
                     "townshipCode": "03 80  03",
                     "township": "GAMLA UPPSALA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.09,
                     "sumOfPercentagesExclChurchFeePercentage": 32.17,
                     "municipalityTaxPercentage": 20.84,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.17,
                     "churchFeePercentage": 0.92
                  },
                  {
                     "townshipCode": "03 80  38",
                     "township": "GOTTSUNDA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.09,
                     "sumOfPercentagesExclChurchFeePercentage": 32.17,
                     "municipalityTaxPercentage": 20.84,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.17,
                     "churchFeePercentage": 0.92
                  },
                  {
                     "townshipCode": "03 80  07",
                     "township": "HAGBY",
                     "sumOfPercentagesInclChurchFeePercentage": 33.43,
                     "sumOfPercentagesExclChurchFeePercentage": 32.23,
                     "municipalityTaxPercentage": 20.84,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 1.2
                  },
                  {
                     "townshipCode": "03 80  02",
                     "township": "HELGA TREFALDIGHET",
                     "sumOfPercentagesInclChurchFeePercentage": 33.09,
                     "sumOfPercentagesExclChurchFeePercentage": 32.17,
                     "municipalityTaxPercentage": 20.84,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.17,
                     "churchFeePercentage": 0.92
                  },
                  {
                     "townshipCode": "03 80  28",
                     "township": "KNUTBY-BLADÅKER",
                     "sumOfPercentagesInclChurchFeePercentage": 33.41,
                     "sumOfPercentagesExclChurchFeePercentage": 32.27,
                     "municipalityTaxPercentage": 20.84,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.27,
                     "churchFeePercentage": 1.14
                  },
                  {
                     "townshipCode": "03 80  24",
                     "township": "LENA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.26,
                     "sumOfPercentagesExclChurchFeePercentage": 32.19,
                     "municipalityTaxPercentage": 20.84,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.19,
                     "churchFeePercentage": 1.07
                  },
                  {
                     "townshipCode": "03 80  14",
                     "township": "NORRA HAGUNDA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.5,
                     "sumOfPercentagesExclChurchFeePercentage": 32.25,
                     "municipalityTaxPercentage": 20.84,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "03 80  08",
                     "township": "RAMSTA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.43,
                     "sumOfPercentagesExclChurchFeePercentage": 32.23,
                     "municipalityTaxPercentage": 20.84,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 1.2
                  },
                  {
                     "townshipCode": "03 80  41",
                     "township": "RASBO",
                     "sumOfPercentagesInclChurchFeePercentage": 33.45,
                     "sumOfPercentagesExclChurchFeePercentage": 32.23,
                     "municipalityTaxPercentage": 20.84,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 1.22
                  },
                  {
                     "townshipCode": "03 80  42",
                     "township": "RASBOKIL",
                     "sumOfPercentagesInclChurchFeePercentage": 33.45,
                     "sumOfPercentagesExclChurchFeePercentage": 32.23,
                     "municipalityTaxPercentage": 20.84,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 1.22
                  },
                  {
                     "townshipCode": "03 80  22",
                     "township": "SKUTTUNGE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.48,
                     "sumOfPercentagesExclChurchFeePercentage": 32.26,
                     "municipalityTaxPercentage": 20.84,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.26,
                     "churchFeePercentage": 1.22
                  },
                  {
                     "townshipCode": "03 80  39",
                     "township": "STAVBY",
                     "sumOfPercentagesInclChurchFeePercentage": 33.45,
                     "sumOfPercentagesExclChurchFeePercentage": 32.23,
                     "municipalityTaxPercentage": 20.84,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 1.22
                  },
                  {
                     "townshipCode": "03 80  23",
                     "township": "TENSTA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.26,
                     "sumOfPercentagesExclChurchFeePercentage": 32.19,
                     "municipalityTaxPercentage": 20.84,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.19,
                     "churchFeePercentage": 1.07
                  },
                  {
                     "townshipCode": "03 80  40",
                     "township": "TUNA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.45,
                     "sumOfPercentagesExclChurchFeePercentage": 32.23,
                     "municipalityTaxPercentage": 20.84,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 1.22
                  },
                  {
                     "townshipCode": "03 80  01",
                     "township": "UPPSALA DOMKYRKOFÖRS.",
                     "sumOfPercentagesInclChurchFeePercentage": 33.09,
                     "sumOfPercentagesExclChurchFeePercentage": 32.17,
                     "municipalityTaxPercentage": 20.84,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.17,
                     "churchFeePercentage": 0.92
                  },
                  {
                     "townshipCode": "03 80  12",
                     "township": "UPPSALA-NÄS",
                     "sumOfPercentagesInclChurchFeePercentage": 33.43,
                     "sumOfPercentagesExclChurchFeePercentage": 32.23,
                     "municipalityTaxPercentage": 20.84,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 1.2
                  },
                  {
                     "townshipCode": "03 80  04",
                     "township": "VAKSALA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.09,
                     "sumOfPercentagesExclChurchFeePercentage": 32.17,
                     "municipalityTaxPercentage": 20.84,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.17,
                     "churchFeePercentage": 0.92
                  },
                  {
                     "townshipCode": "03 80  27",
                     "township": "VIKSTA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.48,
                     "sumOfPercentagesExclChurchFeePercentage": 32.26,
                     "municipalityTaxPercentage": 20.84,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.26,
                     "churchFeePercentage": 1.22
                  },
                  {
                     "townshipCode": "03 80  10",
                     "township": "VÄSTERÅKER",
                     "sumOfPercentagesInclChurchFeePercentage": 33.43,
                     "sumOfPercentagesExclChurchFeePercentage": 32.23,
                     "municipalityTaxPercentage": 20.84,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 1.2
                  },
                  {
                     "townshipCode": "03 80  25",
                     "township": "ÄRENTUNA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.26,
                     "sumOfPercentagesExclChurchFeePercentage": 32.19,
                     "municipalityTaxPercentage": 20.84,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.19,
                     "churchFeePercentage": 1.07
                  }
               ]
            },
            {
               "municipality": "UPPVIDINGE",
               "townships": [
                  {
                     "townshipCode": "07 60  03",
                     "township": "LENHOVDA-HERRÅKRA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.89,
                     "sumOfPercentagesExclChurchFeePercentage": 33.54,
                     "municipalityTaxPercentage": 21.61,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.35
                  },
                  {
                     "townshipCode": "07 60  04",
                     "township": "NOTTEBÄCK",
                     "sumOfPercentagesInclChurchFeePercentage": 34.89,
                     "sumOfPercentagesExclChurchFeePercentage": 33.54,
                     "municipalityTaxPercentage": 21.61,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.35
                  },
                  {
                     "townshipCode": "07 60  05",
                     "township": "ÄLGHULT",
                     "sumOfPercentagesInclChurchFeePercentage": 34.89,
                     "sumOfPercentagesExclChurchFeePercentage": 33.54,
                     "municipalityTaxPercentage": 21.61,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.35
                  },
                  {
                     "townshipCode": "07 60  01",
                     "township": "ÅSEDA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.89,
                     "sumOfPercentagesExclChurchFeePercentage": 33.54,
                     "municipalityTaxPercentage": 21.61,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.35
                  }
               ]
            },
            {
               "municipality": "VADSTENA",
               "townships": [
                  {
                     "townshipCode": "05 84  11",
                     "township": "ASKA, DEL",
                     "sumOfPercentagesInclChurchFeePercentage": 33.81,
                     "sumOfPercentagesExclChurchFeePercentage": 32.61,
                     "municipalityTaxPercentage": 21.55,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.2
                  },
                  {
                     "townshipCode": "05 84  08",
                     "township": "DAL",
                     "sumOfPercentagesInclChurchFeePercentage": 33.89,
                     "sumOfPercentagesExclChurchFeePercentage": 32.66,
                     "municipalityTaxPercentage": 21.55,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.41,
                     "churchFeePercentage": 1.23
                  },
                  {
                     "townshipCode": "05 84  01",
                     "township": "VADSTENA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.89,
                     "sumOfPercentagesExclChurchFeePercentage": 32.66,
                     "municipalityTaxPercentage": 21.55,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.41,
                     "churchFeePercentage": 1.23
                  }
               ]
            },
            {
               "municipality": "VAGGERYD",
               "townships": [
                  {
                     "townshipCode": "06 65  01",
                     "township": "BYARUM-BONDSTORP",
                     "sumOfPercentagesInclChurchFeePercentage": 33.79,
                     "sumOfPercentagesExclChurchFeePercentage": 32.7,
                     "municipalityTaxPercentage": 21.19,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.09
                  },
                  {
                     "townshipCode": "06 65  03",
                     "township": "SKILLINGARYD",
                     "sumOfPercentagesInclChurchFeePercentage": 33.85,
                     "sumOfPercentagesExclChurchFeePercentage": 32.74,
                     "municipalityTaxPercentage": 21.19,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.11
                  },
                  {
                     "townshipCode": "06 65  06",
                     "township": "SVENARUM",
                     "sumOfPercentagesInclChurchFeePercentage": 33.79,
                     "sumOfPercentagesExclChurchFeePercentage": 32.7,
                     "municipalityTaxPercentage": 21.19,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.09
                  }
               ]
            },
            {
               "municipality": "VALDEMARSVIK",
               "townships": [
                  {
                     "townshipCode": "05 63  02",
                     "township": "RINGARUM",
                     "sumOfPercentagesInclChurchFeePercentage": 34.43,
                     "sumOfPercentagesExclChurchFeePercentage": 33.08,
                     "municipalityTaxPercentage": 21.98,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.35
                  },
                  {
                     "townshipCode": "05 63  01",
                     "township": "VALDEMARSVIK",
                     "sumOfPercentagesInclChurchFeePercentage": 34.43,
                     "sumOfPercentagesExclChurchFeePercentage": 33.08,
                     "municipalityTaxPercentage": 21.98,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.35
                  }
               ]
            },
            {
               "municipality": "VALLENTUNA",
               "townships": [
                  {
                     "townshipCode": "01 15  01",
                     "township": "VALLENTUNA",
                     "sumOfPercentagesInclChurchFeePercentage": 32.06,
                     "sumOfPercentagesExclChurchFeePercentage": 31.22,
                     "municipalityTaxPercentage": 18.98,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.14,
                     "churchFeePercentage": 0.84
                  },
                  {
                     "townshipCode": "01 15  07",
                     "township": "ÖSSEBY",
                     "sumOfPercentagesInclChurchFeePercentage": 32.44,
                     "sumOfPercentagesExclChurchFeePercentage": 31.295,
                     "municipalityTaxPercentage": 18.98,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.215,
                     "churchFeePercentage": 1.145
                  }
               ]
            },
            {
               "municipality": "VANSBRO",
               "townships": [
                  {
                     "townshipCode": "20 21  01",
                     "township": "JÄRNA MED NÅS OCH ÄPPELBO",
                     "sumOfPercentagesInclChurchFeePercentage": 35.56,
                     "sumOfPercentagesExclChurchFeePercentage": 34.28,
                     "municipalityTaxPercentage": 22.77,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.28
                  }
               ]
            },
            {
               "municipality": "VARA",
               "townships": [
                  {
                     "townshipCode": "14 70  29",
                     "township": "KVÄNUM",
                     "sumOfPercentagesInclChurchFeePercentage": 34.57,
                     "sumOfPercentagesExclChurchFeePercentage": 33.15,
                     "municipalityTaxPercentage": 21.27,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.42
                  },
                  {
                     "townshipCode": "14 70  24",
                     "township": "LARV",
                     "sumOfPercentagesInclChurchFeePercentage": 34.57,
                     "sumOfPercentagesExclChurchFeePercentage": 33.15,
                     "municipalityTaxPercentage": 21.27,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.42
                  },
                  {
                     "townshipCode": "14 70  04",
                     "township": "LEVENE",
                     "sumOfPercentagesInclChurchFeePercentage": 34.57,
                     "sumOfPercentagesExclChurchFeePercentage": 33.15,
                     "municipalityTaxPercentage": 21.27,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.42
                  },
                  {
                     "townshipCode": "14 70  10",
                     "township": "RYDA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.57,
                     "sumOfPercentagesExclChurchFeePercentage": 33.15,
                     "municipalityTaxPercentage": 21.27,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.42
                  },
                  {
                     "townshipCode": "14 70  01",
                     "township": "VARA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.57,
                     "sumOfPercentagesExclChurchFeePercentage": 33.15,
                     "municipalityTaxPercentage": 21.27,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.42
                  },
                  {
                     "townshipCode": "14 70  14",
                     "township": "VEDUM",
                     "sumOfPercentagesInclChurchFeePercentage": 34.57,
                     "sumOfPercentagesExclChurchFeePercentage": 33.15,
                     "municipalityTaxPercentage": 21.27,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.42
                  }
               ]
            },
            {
               "municipality": "VARBERG",
               "townships": [
                  {
                     "townshipCode": "13 83  05",
                     "township": "HIMLEDALEN",
                     "sumOfPercentagesInclChurchFeePercentage": 32.83,
                     "sumOfPercentagesExclChurchFeePercentage": 31.61,
                     "municipalityTaxPercentage": 20.33,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.46,
                     "churchFeePercentage": 1.22
                  },
                  {
                     "townshipCode": "13 83  13",
                     "township": "LINDBERGA",
                     "sumOfPercentagesInclChurchFeePercentage": 32.78,
                     "sumOfPercentagesExclChurchFeePercentage": 31.5,
                     "municipalityTaxPercentage": 20.33,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.28
                  },
                  {
                     "townshipCode": "13 83  10",
                     "township": "SIBBARP-DAGSÅS",
                     "sumOfPercentagesInclChurchFeePercentage": 32.85,
                     "sumOfPercentagesExclChurchFeePercentage": 31.6,
                     "municipalityTaxPercentage": 20.33,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "13 83  12",
                     "township": "SPANNARP",
                     "sumOfPercentagesInclChurchFeePercentage": 32.85,
                     "sumOfPercentagesExclChurchFeePercentage": 31.6,
                     "municipalityTaxPercentage": 20.33,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "13 83  02",
                     "township": "TRÄSLÖV",
                     "sumOfPercentagesInclChurchFeePercentage": 32.38,
                     "sumOfPercentagesExclChurchFeePercentage": 31.37,
                     "municipalityTaxPercentage": 20.33,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 1.01
                  },
                  {
                     "townshipCode": "13 83  11",
                     "township": "TVÅÅKER",
                     "sumOfPercentagesInclChurchFeePercentage": 32.85,
                     "sumOfPercentagesExclChurchFeePercentage": 31.6,
                     "municipalityTaxPercentage": 20.33,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "13 83  01",
                     "township": "VARBERG",
                     "sumOfPercentagesInclChurchFeePercentage": 32.25,
                     "sumOfPercentagesExclChurchFeePercentage": 31.47,
                     "municipalityTaxPercentage": 20.33,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 0.78
                  },
                  {
                     "townshipCode": "13 83  19",
                     "township": "VEDDIGE-KUNGSÄTER",
                     "sumOfPercentagesInclChurchFeePercentage": 32.86,
                     "sumOfPercentagesExclChurchFeePercentage": 31.55,
                     "municipalityTaxPercentage": 20.33,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.31
                  },
                  {
                     "townshipCode": "13 83  20",
                     "township": "VÄRÖ-STRÅVALLA",
                     "sumOfPercentagesInclChurchFeePercentage": 32.68,
                     "sumOfPercentagesExclChurchFeePercentage": 31.5,
                     "municipalityTaxPercentage": 20.33,
                     "countyTaxPercentage": 10.82,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.18
                  }
               ]
            },
            {
               "municipality": "VAXHOLM",
               "townships": [
                  {
                     "townshipCode": "01 87  01",
                     "township": "VAXHOLM",
                     "sumOfPercentagesInclChurchFeePercentage": 32.84,
                     "sumOfPercentagesExclChurchFeePercentage": 31.99,
                     "municipalityTaxPercentage": 19.78,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.11,
                     "churchFeePercentage": 0.85
                  }
               ]
            },
            {
               "municipality": "VELLINGE",
               "townships": [
                  {
                     "townshipCode": "12 33  09",
                     "township": "HÖLLVIKEN",
                     "sumOfPercentagesInclChurchFeePercentage": 30.08,
                     "sumOfPercentagesExclChurchFeePercentage": 29.32,
                     "municipalityTaxPercentage": 18.5,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.13,
                     "churchFeePercentage": 0.76
                  },
                  {
                     "townshipCode": "12 33  05",
                     "township": "SKANÖR-FALSTERBO",
                     "sumOfPercentagesInclChurchFeePercentage": 30.41,
                     "sumOfPercentagesExclChurchFeePercentage": 29.42,
                     "municipalityTaxPercentage": 18.5,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 0.99
                  },
                  {
                     "townshipCode": "12 33  04",
                     "township": "VELLINGE-MÅNSTORP",
                     "sumOfPercentagesInclChurchFeePercentage": 30.52,
                     "sumOfPercentagesExclChurchFeePercentage": 29.43,
                     "municipalityTaxPercentage": 18.5,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1.09
                  }
               ]
            },
            {
               "municipality": "VETLANDA",
               "townships": [
                  {
                     "townshipCode": "06 85  15",
                     "township": "ALSEDA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.69,
                     "sumOfPercentagesExclChurchFeePercentage": 33.24,
                     "municipalityTaxPercentage": 21.51,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.47,
                     "churchFeePercentage": 1.45
                  },
                  {
                     "townshipCode": "06 85  19",
                     "township": "BJÖRKÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.25,
                     "sumOfPercentagesExclChurchFeePercentage": 33,
                     "municipalityTaxPercentage": 21.51,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "06 85  03",
                     "township": "BÄCKSEDA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.63,
                     "sumOfPercentagesExclChurchFeePercentage": 33.19,
                     "municipalityTaxPercentage": 21.51,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.42,
                     "churchFeePercentage": 1.44
                  },
                  {
                     "townshipCode": "06 85  09",
                     "township": "KORSBERGA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.63,
                     "sumOfPercentagesExclChurchFeePercentage": 33.19,
                     "municipalityTaxPercentage": 21.51,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.42,
                     "churchFeePercentage": 1.44
                  },
                  {
                     "townshipCode": "06 85  21",
                     "township": "LANNASKEDE",
                     "sumOfPercentagesInclChurchFeePercentage": 34.27,
                     "sumOfPercentagesExclChurchFeePercentage": 33.1,
                     "municipalityTaxPercentage": 21.51,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.17
                  },
                  {
                     "townshipCode": "06 85  14",
                     "township": "NYE, NÄSHULT OCH STENBERGA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.63,
                     "sumOfPercentagesExclChurchFeePercentage": 33.19,
                     "municipalityTaxPercentage": 21.51,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.42,
                     "churchFeePercentage": 1.44
                  },
                  {
                     "townshipCode": "06 85  04",
                     "township": "NÄSBY",
                     "sumOfPercentagesInclChurchFeePercentage": 34.25,
                     "sumOfPercentagesExclChurchFeePercentage": 33,
                     "municipalityTaxPercentage": 21.51,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "06 85  20",
                     "township": "NÄVELSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.25,
                     "sumOfPercentagesExclChurchFeePercentage": 33,
                     "municipalityTaxPercentage": 21.51,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "06 85  01",
                     "township": "VETLANDA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.25,
                     "sumOfPercentagesExclChurchFeePercentage": 33,
                     "municipalityTaxPercentage": 21.51,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.23,
                     "churchFeePercentage": 1.25
                  }
               ]
            },
            {
               "municipality": "VILHELMINA",
               "townships": [
                  {
                     "townshipCode": "24 62  01",
                     "township": "VILHELMINA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.905,
                     "sumOfPercentagesExclChurchFeePercentage": 34.605,
                     "municipalityTaxPercentage": 23.4,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.405,
                     "churchFeePercentage": 1.3
                  }
               ]
            },
            {
               "municipality": "VIMMERBY",
               "townships": [
                  {
                     "townshipCode": "08 84  05",
                     "township": "FRÖDINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 34.85,
                     "sumOfPercentagesExclChurchFeePercentage": 33.53,
                     "municipalityTaxPercentage": 21.86,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.32
                  },
                  {
                     "townshipCode": "08 84  06",
                     "township": "LOCKNEVI",
                     "sumOfPercentagesInclChurchFeePercentage": 34.85,
                     "sumOfPercentagesExclChurchFeePercentage": 33.53,
                     "municipalityTaxPercentage": 21.86,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.32
                  },
                  {
                     "townshipCode": "08 84  04",
                     "township": "PELARNE",
                     "sumOfPercentagesInclChurchFeePercentage": 34.85,
                     "sumOfPercentagesExclChurchFeePercentage": 33.53,
                     "municipalityTaxPercentage": 21.86,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.32
                  },
                  {
                     "townshipCode": "08 84  03",
                     "township": "RUMSKULLA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.85,
                     "sumOfPercentagesExclChurchFeePercentage": 33.53,
                     "municipalityTaxPercentage": 21.86,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.32
                  },
                  {
                     "townshipCode": "08 84  08",
                     "township": "SÖDRA VI-DJURSDALA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.98,
                     "sumOfPercentagesExclChurchFeePercentage": 33.62,
                     "municipalityTaxPercentage": 21.86,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.39,
                     "churchFeePercentage": 1.36
                  },
                  {
                     "townshipCode": "08 84  09",
                     "township": "TUNA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.85,
                     "sumOfPercentagesExclChurchFeePercentage": 33.53,
                     "municipalityTaxPercentage": 21.86,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.32
                  },
                  {
                     "townshipCode": "08 84  01",
                     "township": "VIMMERBY",
                     "sumOfPercentagesInclChurchFeePercentage": 34.85,
                     "sumOfPercentagesExclChurchFeePercentage": 33.53,
                     "municipalityTaxPercentage": 21.86,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.32
                  }
               ]
            },
            {
               "municipality": "VINDELN",
               "townships": [
                  {
                     "townshipCode": "24 04  01",
                     "township": "VINDELN",
                     "sumOfPercentagesInclChurchFeePercentage": 35.56,
                     "sumOfPercentagesExclChurchFeePercentage": 34.47,
                     "municipalityTaxPercentage": 23.1,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.57,
                     "churchFeePercentage": 1.09
                  }
               ]
            },
            {
               "municipality": "VINGÅKER",
               "townships": [
                  {
                     "townshipCode": "04 28  01",
                     "township": "VÄSTRA VINGÅKER",
                     "sumOfPercentagesInclChurchFeePercentage": 34.83,
                     "sumOfPercentagesExclChurchFeePercentage": 33.79,
                     "municipalityTaxPercentage": 22.73,
                     "countyTaxPercentage": 10.77,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.04
                  },
                  {
                     "townshipCode": "04 28  02",
                     "township": "ÖSTERÅKER",
                     "sumOfPercentagesInclChurchFeePercentage": 34.83,
                     "sumOfPercentagesExclChurchFeePercentage": 33.79,
                     "municipalityTaxPercentage": 22.73,
                     "countyTaxPercentage": 10.77,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.04
                  }
               ]
            },
            {
               "municipality": "VÄNERSBORG",
               "townships": [
                  {
                     "townshipCode": "14 87  04",
                     "township": "BRÅLANDA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.43,
                     "sumOfPercentagesExclChurchFeePercentage": 34.11,
                     "municipalityTaxPercentage": 22.21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.42,
                     "churchFeePercentage": 1.32
                  },
                  {
                     "townshipCode": "14 87  06",
                     "township": "FRÄNDEFORS",
                     "sumOfPercentagesInclChurchFeePercentage": 35.03,
                     "sumOfPercentagesExclChurchFeePercentage": 34,
                     "municipalityTaxPercentage": 22.21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 1.03
                  },
                  {
                     "townshipCode": "14 87  03",
                     "township": "GESTAD",
                     "sumOfPercentagesInclChurchFeePercentage": 35.43,
                     "sumOfPercentagesExclChurchFeePercentage": 34.11,
                     "municipalityTaxPercentage": 22.21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.42,
                     "churchFeePercentage": 1.32
                  },
                  {
                     "townshipCode": "14 87  05",
                     "township": "SUNDALS-RYR",
                     "sumOfPercentagesInclChurchFeePercentage": 35.43,
                     "sumOfPercentagesExclChurchFeePercentage": 34.11,
                     "municipalityTaxPercentage": 22.21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.42,
                     "churchFeePercentage": 1.32
                  },
                  {
                     "townshipCode": "14 87  01",
                     "township": "VÄNERSBORG OCH VÄNE-RYR",
                     "sumOfPercentagesInclChurchFeePercentage": 34.87,
                     "sumOfPercentagesExclChurchFeePercentage": 33.97,
                     "municipalityTaxPercentage": 22.21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 0.9
                  },
                  {
                     "townshipCode": "14 87  07",
                     "township": "VÄNERSNÄS",
                     "sumOfPercentagesInclChurchFeePercentage": 35.25,
                     "sumOfPercentagesExclChurchFeePercentage": 34.03,
                     "municipalityTaxPercentage": 22.21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.34,
                     "churchFeePercentage": 1.22
                  },
                  {
                     "townshipCode": "14 87  09",
                     "township": "VÄSTRA TUNHEM",
                     "sumOfPercentagesInclChurchFeePercentage": 35.25,
                     "sumOfPercentagesExclChurchFeePercentage": 34.03,
                     "municipalityTaxPercentage": 22.21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.34,
                     "churchFeePercentage": 1.22
                  }
               ]
            },
            {
               "municipality": "VÄNNÄS",
               "townships": [
                  {
                     "townshipCode": "24 60  01",
                     "township": "VÄNNÄS",
                     "sumOfPercentagesInclChurchFeePercentage": 35.69,
                     "sumOfPercentagesExclChurchFeePercentage": 34.72,
                     "municipalityTaxPercentage": 23.6,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 0.97
                  }
               ]
            },
            {
               "municipality": "VÄRMDÖ",
               "townships": [
                  {
                     "townshipCode": "01 20  03",
                     "township": "DJURÖ, MÖJA OCH NÄMDÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 33.38,
                     "sumOfPercentagesExclChurchFeePercentage": 32.21,
                     "municipalityTaxPercentage": 19.91,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 1.17
                  },
                  {
                     "townshipCode": "01 20  06",
                     "township": "GUSTAVSBERG-INGARÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 32.91,
                     "sumOfPercentagesExclChurchFeePercentage": 32.13,
                     "municipalityTaxPercentage": 19.91,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.12,
                     "churchFeePercentage": 0.78
                  },
                  {
                     "townshipCode": "01 20  01",
                     "township": "VÄRMDÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 33.02,
                     "sumOfPercentagesExclChurchFeePercentage": 32.15,
                     "municipalityTaxPercentage": 19.91,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.14,
                     "churchFeePercentage": 0.87
                  }
               ]
            },
            {
               "municipality": "VÄRNAMO",
               "townships": [
                  {
                     "townshipCode": "06 83  02",
                     "township": "BREDARYD",
                     "sumOfPercentagesInclChurchFeePercentage": 33.99,
                     "sumOfPercentagesExclChurchFeePercentage": 32.69,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 1.3
                  },
                  {
                     "townshipCode": "06 83  06",
                     "township": "FORSHEDABYGDEN",
                     "sumOfPercentagesInclChurchFeePercentage": 34.18,
                     "sumOfPercentagesExclChurchFeePercentage": 32.68,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.5
                  },
                  {
                     "townshipCode": "06 83  11",
                     "township": "GÄLLARYD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.3,
                     "sumOfPercentagesExclChurchFeePercentage": 32.8,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.42,
                     "churchFeePercentage": 1.5
                  },
                  {
                     "townshipCode": "06 83  03",
                     "township": "KULLTORP, DEL",
                     "sumOfPercentagesInclChurchFeePercentage": 33.99,
                     "sumOfPercentagesExclChurchFeePercentage": 32.69,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 1.3
                  },
                  {
                     "townshipCode": "06 83  13",
                     "township": "NYDALA-FRYELE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.54,
                     "sumOfPercentagesExclChurchFeePercentage": 32.6,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 0.94
                  },
                  {
                     "townshipCode": "06 83  12",
                     "township": "RYDAHOLM",
                     "sumOfPercentagesInclChurchFeePercentage": 33.78,
                     "sumOfPercentagesExclChurchFeePercentage": 32.68,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.1
                  },
                  {
                     "townshipCode": "06 83  09",
                     "township": "TÅNNÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.3,
                     "sumOfPercentagesExclChurchFeePercentage": 32.8,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.42,
                     "churchFeePercentage": 1.5
                  },
                  {
                     "townshipCode": "06 83  10",
                     "township": "VOXTORP",
                     "sumOfPercentagesInclChurchFeePercentage": 34.3,
                     "sumOfPercentagesExclChurchFeePercentage": 32.8,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.42,
                     "churchFeePercentage": 1.5
                  },
                  {
                     "townshipCode": "06 83  01",
                     "township": "VÄRNAMO",
                     "sumOfPercentagesInclChurchFeePercentage": 33.54,
                     "sumOfPercentagesExclChurchFeePercentage": 32.6,
                     "municipalityTaxPercentage": 21.12,
                     "countyTaxPercentage": 11.26,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 0.94
                  }
               ]
            },
            {
               "municipality": "VÄSTERVIK",
               "townships": [
                  {
                     "townshipCode": "08 83  06",
                     "township": "DALHEM",
                     "sumOfPercentagesInclChurchFeePercentage": 34.58,
                     "sumOfPercentagesExclChurchFeePercentage": 33.08,
                     "municipalityTaxPercentage": 21.16,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.55,
                     "churchFeePercentage": 1.5
                  },
                  {
                     "townshipCode": "08 83  11",
                     "township": "GAMLEBY",
                     "sumOfPercentagesInclChurchFeePercentage": 34.58,
                     "sumOfPercentagesExclChurchFeePercentage": 33.08,
                     "municipalityTaxPercentage": 21.16,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.55,
                     "churchFeePercentage": 1.5
                  },
                  {
                     "townshipCode": "08 83  03",
                     "township": "GLADHAMMAR-VÄSTRUM",
                     "sumOfPercentagesInclChurchFeePercentage": 34.19,
                     "sumOfPercentagesExclChurchFeePercentage": 32.89,
                     "municipalityTaxPercentage": 21.16,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.3
                  },
                  {
                     "townshipCode": "08 83  14",
                     "township": "HALLINGEBERG-BLACKSTAD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.19,
                     "sumOfPercentagesExclChurchFeePercentage": 32.89,
                     "municipalityTaxPercentage": 21.16,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.3
                  },
                  {
                     "townshipCode": "08 83  15",
                     "township": "HJORTED",
                     "sumOfPercentagesInclChurchFeePercentage": 34.19,
                     "sumOfPercentagesExclChurchFeePercentage": 32.89,
                     "municipalityTaxPercentage": 21.16,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.3
                  },
                  {
                     "townshipCode": "08 83  10",
                     "township": "LOFTA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.58,
                     "sumOfPercentagesExclChurchFeePercentage": 33.08,
                     "municipalityTaxPercentage": 21.16,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.55,
                     "churchFeePercentage": 1.5
                  },
                  {
                     "townshipCode": "08 83  09",
                     "township": "LOFTAHAMMAR",
                     "sumOfPercentagesInclChurchFeePercentage": 34.58,
                     "sumOfPercentagesExclChurchFeePercentage": 33.08,
                     "municipalityTaxPercentage": 21.16,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.55,
                     "churchFeePercentage": 1.5
                  },
                  {
                     "townshipCode": "08 83  12",
                     "township": "ODENSVI",
                     "sumOfPercentagesInclChurchFeePercentage": 34.58,
                     "sumOfPercentagesExclChurchFeePercentage": 33.08,
                     "municipalityTaxPercentage": 21.16,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.55,
                     "churchFeePercentage": 1.5
                  },
                  {
                     "townshipCode": "08 83  02",
                     "township": "TÖRNSFALL",
                     "sumOfPercentagesInclChurchFeePercentage": 34.19,
                     "sumOfPercentagesExclChurchFeePercentage": 32.89,
                     "municipalityTaxPercentage": 21.16,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.3
                  },
                  {
                     "townshipCode": "08 83  05",
                     "township": "UKNA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.58,
                     "sumOfPercentagesExclChurchFeePercentage": 33.08,
                     "municipalityTaxPercentage": 21.16,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.55,
                     "churchFeePercentage": 1.5
                  },
                  {
                     "townshipCode": "08 83  01",
                     "township": "VÄSTERVIK",
                     "sumOfPercentagesInclChurchFeePercentage": 34.19,
                     "sumOfPercentagesExclChurchFeePercentage": 32.89,
                     "municipalityTaxPercentage": 21.16,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.3
                  },
                  {
                     "townshipCode": "08 83  08",
                     "township": "VÄSTRA ED",
                     "sumOfPercentagesInclChurchFeePercentage": 34.58,
                     "sumOfPercentagesExclChurchFeePercentage": 33.08,
                     "municipalityTaxPercentage": 21.16,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.55,
                     "churchFeePercentage": 1.5
                  },
                  {
                     "townshipCode": "08 83  07",
                     "township": "ÖVERUM",
                     "sumOfPercentagesInclChurchFeePercentage": 34.58,
                     "sumOfPercentagesExclChurchFeePercentage": 33.08,
                     "municipalityTaxPercentage": 21.16,
                     "countyTaxPercentage": 11.37,
                     "funeralFeePercentage": 0.55,
                     "churchFeePercentage": 1.5
                  }
               ]
            },
            {
               "municipality": "VÄSTERÅS",
               "townships": [
                  {
                     "townshipCode": "19 80  09",
                     "township": "DINGTUNA-LILLHÄRAD",
                     "sumOfPercentagesInclChurchFeePercentage": 32.34,
                     "sumOfPercentagesExclChurchFeePercentage": 31.38,
                     "municipalityTaxPercentage": 20.36,
                     "countyTaxPercentage": 10.88,
                     "funeralFeePercentage": 0.14,
                     "churchFeePercentage": 0.96
                  },
                  {
                     "townshipCode": "19 80  25",
                     "township": "GIDEONSBERG",
                     "sumOfPercentagesInclChurchFeePercentage": 32.34,
                     "sumOfPercentagesExclChurchFeePercentage": 31.38,
                     "municipalityTaxPercentage": 20.36,
                     "countyTaxPercentage": 10.88,
                     "funeralFeePercentage": 0.14,
                     "churchFeePercentage": 0.96
                  },
                  {
                     "townshipCode": "19 80  11",
                     "township": "KUNGSÅRA",
                     "sumOfPercentagesInclChurchFeePercentage": 32.34,
                     "sumOfPercentagesExclChurchFeePercentage": 31.38,
                     "municipalityTaxPercentage": 20.36,
                     "countyTaxPercentage": 10.88,
                     "funeralFeePercentage": 0.14,
                     "churchFeePercentage": 0.96
                  },
                  {
                     "townshipCode": "19 80  07",
                     "township": "NORRBO",
                     "sumOfPercentagesInclChurchFeePercentage": 32.34,
                     "sumOfPercentagesExclChurchFeePercentage": 31.38,
                     "municipalityTaxPercentage": 20.36,
                     "countyTaxPercentage": 10.88,
                     "funeralFeePercentage": 0.14,
                     "churchFeePercentage": 0.96
                  },
                  {
                     "townshipCode": "19 80  20",
                     "township": "RYTTERNE",
                     "sumOfPercentagesInclChurchFeePercentage": 32.34,
                     "sumOfPercentagesExclChurchFeePercentage": 31.38,
                     "municipalityTaxPercentage": 20.36,
                     "countyTaxPercentage": 10.88,
                     "funeralFeePercentage": 0.14,
                     "churchFeePercentage": 0.96
                  },
                  {
                     "townshipCode": "19 80  22",
                     "township": "SKERIKE",
                     "sumOfPercentagesInclChurchFeePercentage": 32.34,
                     "sumOfPercentagesExclChurchFeePercentage": 31.38,
                     "municipalityTaxPercentage": 20.36,
                     "countyTaxPercentage": 10.88,
                     "funeralFeePercentage": 0.14,
                     "churchFeePercentage": 0.96
                  },
                  {
                     "townshipCode": "19 80  16",
                     "township": "TILLBERGA",
                     "sumOfPercentagesInclChurchFeePercentage": 32.34,
                     "sumOfPercentagesExclChurchFeePercentage": 31.38,
                     "municipalityTaxPercentage": 20.36,
                     "countyTaxPercentage": 10.88,
                     "funeralFeePercentage": 0.14,
                     "churchFeePercentage": 0.96
                  },
                  {
                     "townshipCode": "19 80  24",
                     "township": "VIKSÄNG",
                     "sumOfPercentagesInclChurchFeePercentage": 32.34,
                     "sumOfPercentagesExclChurchFeePercentage": 31.38,
                     "municipalityTaxPercentage": 20.36,
                     "countyTaxPercentage": 10.88,
                     "funeralFeePercentage": 0.14,
                     "churchFeePercentage": 0.96
                  },
                  {
                     "townshipCode": "19 80  03",
                     "township": "VÄSTERÅS BADELUNDA",
                     "sumOfPercentagesInclChurchFeePercentage": 32.34,
                     "sumOfPercentagesExclChurchFeePercentage": 31.38,
                     "municipalityTaxPercentage": 20.36,
                     "countyTaxPercentage": 10.88,
                     "funeralFeePercentage": 0.14,
                     "churchFeePercentage": 0.96
                  },
                  {
                     "townshipCode": "19 80  01",
                     "township": "VÄSTERÅS DOMKYRKOFÖRS.",
                     "sumOfPercentagesInclChurchFeePercentage": 32.34,
                     "sumOfPercentagesExclChurchFeePercentage": 31.38,
                     "municipalityTaxPercentage": 20.36,
                     "countyTaxPercentage": 10.88,
                     "funeralFeePercentage": 0.14,
                     "churchFeePercentage": 0.96
                  },
                  {
                     "townshipCode": "19 80  02",
                     "township": "VÄSTERÅS LUNDBY",
                     "sumOfPercentagesInclChurchFeePercentage": 32.34,
                     "sumOfPercentagesExclChurchFeePercentage": 31.38,
                     "municipalityTaxPercentage": 20.36,
                     "countyTaxPercentage": 10.88,
                     "funeralFeePercentage": 0.14,
                     "churchFeePercentage": 0.96
                  },
                  {
                     "townshipCode": "19 80  10",
                     "township": "VÄSTERÅS-BARKARÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 32.34,
                     "sumOfPercentagesExclChurchFeePercentage": 31.38,
                     "municipalityTaxPercentage": 20.36,
                     "countyTaxPercentage": 10.88,
                     "funeralFeePercentage": 0.14,
                     "churchFeePercentage": 0.96
                  },
                  {
                     "townshipCode": "19 80  23",
                     "township": "ÖNSTA",
                     "sumOfPercentagesInclChurchFeePercentage": 32.34,
                     "sumOfPercentagesExclChurchFeePercentage": 31.38,
                     "municipalityTaxPercentage": 20.36,
                     "countyTaxPercentage": 10.88,
                     "funeralFeePercentage": 0.14,
                     "churchFeePercentage": 0.96
                  }
               ]
            },
            {
               "municipality": "VÄXJÖ",
               "townships": [
                  {
                     "townshipCode": "07 80  06",
                     "township": "DÄDESJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 33.12,
                     "sumOfPercentagesExclChurchFeePercentage": 32.07,
                     "municipalityTaxPercentage": 20.19,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.05
                  },
                  {
                     "townshipCode": "07 80  16",
                     "township": "GEMLA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.12,
                     "sumOfPercentagesExclChurchFeePercentage": 32.07,
                     "municipalityTaxPercentage": 20.19,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.05
                  },
                  {
                     "townshipCode": "07 80  20",
                     "township": "GÅRDSBY",
                     "sumOfPercentagesInclChurchFeePercentage": 33.12,
                     "sumOfPercentagesExclChurchFeePercentage": 32.07,
                     "municipalityTaxPercentage": 20.19,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.05
                  },
                  {
                     "townshipCode": "07 80  07",
                     "township": "HEMMESJÖ-FURUBY",
                     "sumOfPercentagesInclChurchFeePercentage": 33.12,
                     "sumOfPercentagesExclChurchFeePercentage": 32.07,
                     "municipalityTaxPercentage": 20.19,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.05
                  },
                  {
                     "townshipCode": "07 80  08",
                     "township": "INGELSTAD",
                     "sumOfPercentagesInclChurchFeePercentage": 33.12,
                     "sumOfPercentagesExclChurchFeePercentage": 32.07,
                     "municipalityTaxPercentage": 20.19,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.05
                  },
                  {
                     "townshipCode": "07 80  12",
                     "township": "KALVSVIK",
                     "sumOfPercentagesInclChurchFeePercentage": 33.12,
                     "sumOfPercentagesExclChurchFeePercentage": 32.07,
                     "municipalityTaxPercentage": 20.19,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.05
                  },
                  {
                     "townshipCode": "07 80  24",
                     "township": "LAMMHULT",
                     "sumOfPercentagesInclChurchFeePercentage": 33.12,
                     "sumOfPercentagesExclChurchFeePercentage": 32.07,
                     "municipalityTaxPercentage": 20.19,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.05
                  },
                  {
                     "townshipCode": "07 80  03",
                     "township": "SJÖSÅS",
                     "sumOfPercentagesInclChurchFeePercentage": 33.12,
                     "sumOfPercentagesExclChurchFeePercentage": 32.07,
                     "municipalityTaxPercentage": 20.19,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.05
                  },
                  {
                     "townshipCode": "07 80  21",
                     "township": "SÖRABY",
                     "sumOfPercentagesInclChurchFeePercentage": 33.12,
                     "sumOfPercentagesExclChurchFeePercentage": 32.07,
                     "municipalityTaxPercentage": 20.19,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.05
                  },
                  {
                     "townshipCode": "07 80  13",
                     "township": "TÄVELSÅS",
                     "sumOfPercentagesInclChurchFeePercentage": 33.12,
                     "sumOfPercentagesExclChurchFeePercentage": 32.07,
                     "municipalityTaxPercentage": 20.19,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.05
                  },
                  {
                     "townshipCode": "07 80  15",
                     "township": "VEDERSLÖV",
                     "sumOfPercentagesInclChurchFeePercentage": 33.12,
                     "sumOfPercentagesExclChurchFeePercentage": 32.07,
                     "municipalityTaxPercentage": 20.19,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.05
                  },
                  {
                     "townshipCode": "07 80  01",
                     "township": "VÄXJÖ STADS- OCH DOMKYRKOFÖRS.",
                     "sumOfPercentagesInclChurchFeePercentage": 33.12,
                     "sumOfPercentagesExclChurchFeePercentage": 32.07,
                     "municipalityTaxPercentage": 20.19,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.05
                  },
                  {
                     "townshipCode": "07 80  18",
                     "township": "ÖJABY",
                     "sumOfPercentagesInclChurchFeePercentage": 33.12,
                     "sumOfPercentagesExclChurchFeePercentage": 32.07,
                     "municipalityTaxPercentage": 20.19,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.05
                  }
               ]
            },
            {
               "municipality": "VÅRGÅRDA",
               "townships": [
                  {
                     "townshipCode": "14 42  14",
                     "township": "ALGUTSTORP",
                     "sumOfPercentagesInclChurchFeePercentage": 34.19,
                     "sumOfPercentagesExclChurchFeePercentage": 32.98,
                     "municipalityTaxPercentage": 21.21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.21
                  },
                  {
                     "townshipCode": "14 42  10",
                     "township": "ASKLANDA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.19,
                     "sumOfPercentagesExclChurchFeePercentage": 32.98,
                     "municipalityTaxPercentage": 21.21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.21
                  },
                  {
                     "townshipCode": "14 42  06",
                     "township": "HOL",
                     "sumOfPercentagesInclChurchFeePercentage": 34.19,
                     "sumOfPercentagesExclChurchFeePercentage": 32.98,
                     "municipalityTaxPercentage": 21.21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.21
                  },
                  {
                     "townshipCode": "14 42  01",
                     "township": "LENA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.19,
                     "sumOfPercentagesExclChurchFeePercentage": 32.98,
                     "municipalityTaxPercentage": 21.21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.21
                  },
                  {
                     "townshipCode": "14 42  08",
                     "township": "NÅRUNGA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.19,
                     "sumOfPercentagesExclChurchFeePercentage": 32.98,
                     "municipalityTaxPercentage": 21.21,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.21
                  }
               ]
            },
            {
               "municipality": "YDRE",
               "townships": [
                  {
                     "townshipCode": "05 12  01",
                     "township": "NORRA YDRE",
                     "sumOfPercentagesInclChurchFeePercentage": 34.4,
                     "sumOfPercentagesExclChurchFeePercentage": 32.87,
                     "municipalityTaxPercentage": 21.7,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.47,
                     "churchFeePercentage": 1.53
                  },
                  {
                     "townshipCode": "05 12  03",
                     "township": "SUND-SVINHULT",
                     "sumOfPercentagesInclChurchFeePercentage": 34.4,
                     "sumOfPercentagesExclChurchFeePercentage": 32.87,
                     "municipalityTaxPercentage": 21.7,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.47,
                     "churchFeePercentage": 1.53
                  },
                  {
                     "townshipCode": "05 12  04",
                     "township": "VÄSTRA RYD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.4,
                     "sumOfPercentagesExclChurchFeePercentage": 32.87,
                     "municipalityTaxPercentage": 21.7,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.47,
                     "churchFeePercentage": 1.53
                  }
               ]
            },
            {
               "municipality": "YSTAD",
               "townships": [
                  {
                     "townshipCode": "12 86  05",
                     "township": "LJUNITS",
                     "sumOfPercentagesInclChurchFeePercentage": 32.58,
                     "sumOfPercentagesExclChurchFeePercentage": 31.26,
                     "municipalityTaxPercentage": 20.11,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.46,
                     "churchFeePercentage": 1.32
                  },
                  {
                     "townshipCode": "12 86  17",
                     "township": "LÖDERUP",
                     "sumOfPercentagesInclChurchFeePercentage": 32.39,
                     "sumOfPercentagesExclChurchFeePercentage": 31.47,
                     "municipalityTaxPercentage": 20.11,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.67,
                     "churchFeePercentage": 0.92
                  },
                  {
                     "townshipCode": "12 86  11",
                     "township": "STORA KÖPINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 32.38,
                     "sumOfPercentagesExclChurchFeePercentage": 31.18,
                     "municipalityTaxPercentage": 20.11,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.38,
                     "churchFeePercentage": 1.2
                  },
                  {
                     "townshipCode": "12 86  14",
                     "township": "SÖVESTADSBYGDEN",
                     "sumOfPercentagesInclChurchFeePercentage": 32.2,
                     "sumOfPercentagesExclChurchFeePercentage": 31.15,
                     "municipalityTaxPercentage": 20.11,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.05
                  },
                  {
                     "townshipCode": "12 86  01",
                     "township": "YSTAD",
                     "sumOfPercentagesInclChurchFeePercentage": 32.2,
                     "sumOfPercentagesExclChurchFeePercentage": 31.15,
                     "municipalityTaxPercentage": 20.11,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.35,
                     "churchFeePercentage": 1.05
                  }
               ]
            },
            {
               "municipality": "ÄLMHULT",
               "townships": [
                  {
                     "townshipCode": "07 65  05",
                     "township": "GÖTERYD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.31,
                     "sumOfPercentagesExclChurchFeePercentage": 32.99,
                     "municipalityTaxPercentage": 20.96,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.32
                  },
                  {
                     "townshipCode": "07 65  07",
                     "township": "HALLARYD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.31,
                     "sumOfPercentagesExclChurchFeePercentage": 32.99,
                     "municipalityTaxPercentage": 20.96,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.32
                  },
                  {
                     "townshipCode": "07 65  02",
                     "township": "HÄRLUNDA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.24,
                     "sumOfPercentagesExclChurchFeePercentage": 33,
                     "municipalityTaxPercentage": 20.96,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.44,
                     "churchFeePercentage": 1.24
                  },
                  {
                     "townshipCode": "07 65  06",
                     "township": "PJÄTTERYD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.31,
                     "sumOfPercentagesExclChurchFeePercentage": 32.99,
                     "municipalityTaxPercentage": 20.96,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.32
                  },
                  {
                     "townshipCode": "07 65  04",
                     "township": "STENBROHULT",
                     "sumOfPercentagesInclChurchFeePercentage": 34.01,
                     "sumOfPercentagesExclChurchFeePercentage": 32.9,
                     "municipalityTaxPercentage": 20.96,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.34,
                     "churchFeePercentage": 1.11
                  },
                  {
                     "townshipCode": "07 65  03",
                     "township": "VIRESTAD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.24,
                     "sumOfPercentagesExclChurchFeePercentage": 33,
                     "municipalityTaxPercentage": 20.96,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.44,
                     "churchFeePercentage": 1.24
                  },
                  {
                     "townshipCode": "07 65  01",
                     "township": "ÄLMHULT",
                     "sumOfPercentagesInclChurchFeePercentage": 33.94,
                     "sumOfPercentagesExclChurchFeePercentage": 32.88,
                     "municipalityTaxPercentage": 20.96,
                     "countyTaxPercentage": 11.6,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.06
                  }
               ]
            },
            {
               "municipality": "ÄLVDALEN",
               "townships": [
                  {
                     "townshipCode": "20 39  05",
                     "township": "IDRE-SÄRNA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.97,
                     "sumOfPercentagesExclChurchFeePercentage": 34.4,
                     "municipalityTaxPercentage": 22.79,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.57
                  },
                  {
                     "townshipCode": "20 39  02",
                     "township": "ÄLVDALEN",
                     "sumOfPercentagesInclChurchFeePercentage": 35.48,
                     "sumOfPercentagesExclChurchFeePercentage": 34.25,
                     "municipalityTaxPercentage": 22.79,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.23
                  }
               ]
            },
            {
               "municipality": "ÄLVKARLEBY",
               "townships": [
                  {
                     "townshipCode": "03 19  02",
                     "township": "ÄLVKARLEBY-SKUTSKÄR",
                     "sumOfPercentagesInclChurchFeePercentage": 35.19,
                     "sumOfPercentagesExclChurchFeePercentage": 34.15,
                     "municipalityTaxPercentage": 22.69,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.04
                  }
               ]
            },
            {
               "municipality": "ÄLVSBYN",
               "townships": [
                  {
                     "townshipCode": "25 60  02",
                     "township": "ÄLVSBY",
                     "sumOfPercentagesInclChurchFeePercentage": 33.9,
                     "sumOfPercentagesExclChurchFeePercentage": 32.89,
                     "municipalityTaxPercentage": 22.45,
                     "countyTaxPercentage": 10.18,
                     "funeralFeePercentage": 0.26,
                     "churchFeePercentage": 1.01
                  }
               ]
            },
            {
               "municipality": "ÄNGELHOLM",
               "townships": [
                  {
                     "townshipCode": "12 92  09",
                     "township": "BARKÅKRA",
                     "sumOfPercentagesInclChurchFeePercentage": 31.78,
                     "sumOfPercentagesExclChurchFeePercentage": 30.66,
                     "municipalityTaxPercentage": 19.79,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.18,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "12 92  11",
                     "township": "HJÄRNARP-TÅSTARP",
                     "sumOfPercentagesInclChurchFeePercentage": 32.15,
                     "sumOfPercentagesExclChurchFeePercentage": 30.81,
                     "municipalityTaxPercentage": 19.79,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.34
                  },
                  {
                     "townshipCode": "12 92  05",
                     "township": "MUNKA LJUNGBY",
                     "sumOfPercentagesInclChurchFeePercentage": 32.06,
                     "sumOfPercentagesExclChurchFeePercentage": 30.78,
                     "municipalityTaxPercentage": 19.79,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.28
                  },
                  {
                     "townshipCode": "12 92  06",
                     "township": "STRÖVELSTORP",
                     "sumOfPercentagesInclChurchFeePercentage": 32.18,
                     "sumOfPercentagesExclChurchFeePercentage": 30.81,
                     "municipalityTaxPercentage": 19.79,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.37
                  },
                  {
                     "townshipCode": "12 92  01",
                     "township": "ÄNGELHOLM",
                     "sumOfPercentagesInclChurchFeePercentage": 31.76,
                     "sumOfPercentagesExclChurchFeePercentage": 30.72,
                     "municipalityTaxPercentage": 19.79,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1.04
                  }
               ]
            },
            {
               "municipality": "ÅMÅL",
               "townships": [
                  {
                     "townshipCode": "14 92  01",
                     "township": "ÅMÅL",
                     "sumOfPercentagesInclChurchFeePercentage": 35.596,
                     "sumOfPercentagesExclChurchFeePercentage": 34.397,
                     "municipalityTaxPercentage": 22.46,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.457,
                     "churchFeePercentage": 1.199
                  }
               ]
            },
            {
               "municipality": "ÅNGE",
               "townships": [
                  {
                     "townshipCode": "22 60  02",
                     "township": "BORGSJÖ-HAVERÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.94,
                     "sumOfPercentagesExclChurchFeePercentage": 34.52,
                     "municipalityTaxPercentage": 23.33,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.5,
                     "churchFeePercentage": 1.42
                  },
                  {
                     "townshipCode": "22 60  04",
                     "township": "TORP",
                     "sumOfPercentagesInclChurchFeePercentage": 35.89,
                     "sumOfPercentagesExclChurchFeePercentage": 34.47,
                     "municipalityTaxPercentage": 23.33,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.42
                  }
               ]
            },
            {
               "municipality": "ÅRE",
               "townships": [
                  {
                     "townshipCode": "23 21  04",
                     "township": "KALL",
                     "sumOfPercentagesInclChurchFeePercentage": 35.13,
                     "sumOfPercentagesExclChurchFeePercentage": 33.71,
                     "municipalityTaxPercentage": 22.22,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.42
                  },
                  {
                     "townshipCode": "23 21  05",
                     "township": "UNDERSÅKER",
                     "sumOfPercentagesInclChurchFeePercentage": 35.13,
                     "sumOfPercentagesExclChurchFeePercentage": 33.71,
                     "municipalityTaxPercentage": 22.22,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.29,
                     "churchFeePercentage": 1.42
                  },
                  {
                     "townshipCode": "23 21  03",
                     "township": "VÄSTRA STORSJÖBYGDEN",
                     "sumOfPercentagesInclChurchFeePercentage": 35.32,
                     "sumOfPercentagesExclChurchFeePercentage": 33.87,
                     "municipalityTaxPercentage": 22.22,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.45
                  },
                  {
                     "townshipCode": "23 21  01",
                     "township": "ÅRE",
                     "sumOfPercentagesInclChurchFeePercentage": 35.1,
                     "sumOfPercentagesExclChurchFeePercentage": 33.75,
                     "municipalityTaxPercentage": 22.22,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.35
                  }
               ]
            },
            {
               "municipality": "ÅRJÄNG",
               "townships": [
                  {
                     "townshipCode": "17 65  05",
                     "township": "BLOMSKOG",
                     "sumOfPercentagesInclChurchFeePercentage": 35.695,
                     "sumOfPercentagesExclChurchFeePercentage": 34.2,
                     "municipalityTaxPercentage": 22.45,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.55,
                     "churchFeePercentage": 1.495
                  },
                  {
                     "townshipCode": "17 65  03",
                     "township": "HOLMEDAL-KARLANDA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.695,
                     "sumOfPercentagesExclChurchFeePercentage": 34.2,
                     "municipalityTaxPercentage": 22.45,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.55,
                     "churchFeePercentage": 1.495
                  },
                  {
                     "townshipCode": "17 65  01",
                     "township": "SILBODAL",
                     "sumOfPercentagesInclChurchFeePercentage": 35.695,
                     "sumOfPercentagesExclChurchFeePercentage": 34.2,
                     "municipalityTaxPercentage": 22.45,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.55,
                     "churchFeePercentage": 1.495
                  },
                  {
                     "townshipCode": "17 65  02",
                     "township": "SILLERUD",
                     "sumOfPercentagesInclChurchFeePercentage": 35.695,
                     "sumOfPercentagesExclChurchFeePercentage": 34.2,
                     "municipalityTaxPercentage": 22.45,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.55,
                     "churchFeePercentage": 1.495
                  },
                  {
                     "townshipCode": "17 65  06",
                     "township": "TRANKIL",
                     "sumOfPercentagesInclChurchFeePercentage": 35.695,
                     "sumOfPercentagesExclChurchFeePercentage": 34.2,
                     "municipalityTaxPercentage": 22.45,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.55,
                     "churchFeePercentage": 1.495
                  },
                  {
                     "townshipCode": "17 65  08",
                     "township": "TÖCKSMARK",
                     "sumOfPercentagesInclChurchFeePercentage": 35.695,
                     "sumOfPercentagesExclChurchFeePercentage": 34.2,
                     "municipalityTaxPercentage": 22.45,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.55,
                     "churchFeePercentage": 1.495
                  },
                  {
                     "townshipCode": "17 65  07",
                     "township": "VÄSTRA FÅGELVIK",
                     "sumOfPercentagesInclChurchFeePercentage": 35.695,
                     "sumOfPercentagesExclChurchFeePercentage": 34.2,
                     "municipalityTaxPercentage": 22.45,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.55,
                     "churchFeePercentage": 1.495
                  },
                  {
                     "townshipCode": "17 65  09",
                     "township": "ÖSTERVALLSKOG",
                     "sumOfPercentagesInclChurchFeePercentage": 35.695,
                     "sumOfPercentagesExclChurchFeePercentage": 34.2,
                     "municipalityTaxPercentage": 22.45,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.55,
                     "churchFeePercentage": 1.495
                  }
               ]
            },
            {
               "municipality": "ÅSELE",
               "townships": [
                  {
                     "townshipCode": "24 63  01",
                     "township": "ÅSELE-FREDRIKA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.605,
                     "sumOfPercentagesExclChurchFeePercentage": 34.305,
                     "municipalityTaxPercentage": 23.1,
                     "countyTaxPercentage": 10.8,
                     "funeralFeePercentage": 0.405,
                     "churchFeePercentage": 1.3
                  }
               ]
            },
            {
               "municipality": "ÅSTORP",
               "townships": [
                  {
                     "townshipCode": "12 77  01",
                     "township": "BJÖRNEKULLA-VÄSTRA BROBY",
                     "sumOfPercentagesInclChurchFeePercentage": 32.15,
                     "sumOfPercentagesExclChurchFeePercentage": 31.18,
                     "municipalityTaxPercentage": 20.29,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 0.97
                  },
                  {
                     "townshipCode": "12 77  03",
                     "township": "KVIDINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 32.65,
                     "sumOfPercentagesExclChurchFeePercentage": 31.22,
                     "municipalityTaxPercentage": 20.29,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1.43
                  }
               ]
            },
            {
               "municipality": "ÅTVIDABERG",
               "townships": [
                  {
                     "townshipCode": "05 61  01",
                     "township": "ÅTVID",
                     "sumOfPercentagesInclChurchFeePercentage": 34.29,
                     "sumOfPercentagesExclChurchFeePercentage": 33.01,
                     "municipalityTaxPercentage": 21.95,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.28
                  }
               ]
            },
            {
               "municipality": "ÖCKERÖ",
               "townships": [
                  {
                     "townshipCode": "14 07  01",
                     "township": "ÖCKERÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 33.52,
                     "sumOfPercentagesExclChurchFeePercentage": 32.42,
                     "municipalityTaxPercentage": 20.76,
                     "countyTaxPercentage": 11.48,
                     "funeralFeePercentage": 0.18,
                     "churchFeePercentage": 1.1
                  }
               ]
            },
            {
               "municipality": "ÖDESHÖG",
               "townships": [
                  {
                     "townshipCode": "05 09  02",
                     "township": "ÖDESHÖG",
                     "sumOfPercentagesInclChurchFeePercentage": 33.77,
                     "sumOfPercentagesExclChurchFeePercentage": 32.66,
                     "municipalityTaxPercentage": 21.6,
                     "countyTaxPercentage": 10.7,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.11
                  }
               ]
            },
            {
               "municipality": "ÖREBRO",
               "townships": [
                  {
                     "townshipCode": "18 80  31",
                     "township": "ADOLFSBERG",
                     "sumOfPercentagesInclChurchFeePercentage": 33.45,
                     "sumOfPercentagesExclChurchFeePercentage": 32.55,
                     "municipalityTaxPercentage": 20.85,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.15,
                     "churchFeePercentage": 0.9
                  },
                  {
                     "townshipCode": "18 80  04",
                     "township": "ALMBY",
                     "sumOfPercentagesInclChurchFeePercentage": 33.45,
                     "sumOfPercentagesExclChurchFeePercentage": 32.55,
                     "municipalityTaxPercentage": 20.85,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.15,
                     "churchFeePercentage": 0.9
                  },
                  {
                     "townshipCode": "18 80  15",
                     "township": "ASKER",
                     "sumOfPercentagesInclChurchFeePercentage": 34.14,
                     "sumOfPercentagesExclChurchFeePercentage": 32.8,
                     "municipalityTaxPercentage": 20.85,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.34
                  },
                  {
                     "townshipCode": "18 80  13",
                     "township": "AXBERG",
                     "sumOfPercentagesInclChurchFeePercentage": 33.56,
                     "sumOfPercentagesExclChurchFeePercentage": 32.58,
                     "municipalityTaxPercentage": 20.85,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.18,
                     "churchFeePercentage": 0.98
                  },
                  {
                     "townshipCode": "18 80  27",
                     "township": "GLANSHAMMAR",
                     "sumOfPercentagesInclChurchFeePercentage": 33.99,
                     "sumOfPercentagesExclChurchFeePercentage": 32.74,
                     "municipalityTaxPercentage": 20.85,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.34,
                     "churchFeePercentage": 1.25
                  },
                  {
                     "townshipCode": "18 80  16",
                     "township": "KVISMARE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.86,
                     "sumOfPercentagesExclChurchFeePercentage": 32.66,
                     "municipalityTaxPercentage": 20.85,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.26,
                     "churchFeePercentage": 1.2
                  },
                  {
                     "townshipCode": "18 80  03",
                     "township": "LÄNGBRO",
                     "sumOfPercentagesInclChurchFeePercentage": 33.45,
                     "sumOfPercentagesExclChurchFeePercentage": 32.55,
                     "municipalityTaxPercentage": 20.85,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.15,
                     "churchFeePercentage": 0.9
                  },
                  {
                     "townshipCode": "18 80  14",
                     "township": "LÄNNÄS",
                     "sumOfPercentagesInclChurchFeePercentage": 34.14,
                     "sumOfPercentagesExclChurchFeePercentage": 32.8,
                     "municipalityTaxPercentage": 20.85,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.34
                  },
                  {
                     "townshipCode": "18 80  30",
                     "township": "MIKAEL",
                     "sumOfPercentagesInclChurchFeePercentage": 33.45,
                     "sumOfPercentagesExclChurchFeePercentage": 32.55,
                     "municipalityTaxPercentage": 20.85,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.15,
                     "churchFeePercentage": 0.9
                  },
                  {
                     "townshipCode": "18 80  05",
                     "township": "MOSJÖ-TÄBY",
                     "sumOfPercentagesInclChurchFeePercentage": 33.45,
                     "sumOfPercentagesExclChurchFeePercentage": 32.55,
                     "municipalityTaxPercentage": 20.85,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.15,
                     "churchFeePercentage": 0.9
                  },
                  {
                     "townshipCode": "18 80  08",
                     "township": "TYSSLINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.76,
                     "sumOfPercentagesExclChurchFeePercentage": 32.65,
                     "municipalityTaxPercentage": 20.85,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.11
                  },
                  {
                     "townshipCode": "18 80  01",
                     "township": "ÖREBRO NIKOLAI",
                     "sumOfPercentagesInclChurchFeePercentage": 33.45,
                     "sumOfPercentagesExclChurchFeePercentage": 32.55,
                     "municipalityTaxPercentage": 20.85,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.15,
                     "churchFeePercentage": 0.9
                  },
                  {
                     "townshipCode": "18 80  02",
                     "township": "ÖREBRO OLAUS PETRI",
                     "sumOfPercentagesInclChurchFeePercentage": 33.45,
                     "sumOfPercentagesExclChurchFeePercentage": 32.55,
                     "municipalityTaxPercentage": 20.85,
                     "countyTaxPercentage": 11.55,
                     "funeralFeePercentage": 0.15,
                     "churchFeePercentage": 0.9
                  }
               ]
            },
            {
               "municipality": "ÖRKELLJUNGA",
               "townships": [
                  {
                     "townshipCode": "12 57  02",
                     "township": "RYA",
                     "sumOfPercentagesInclChurchFeePercentage": 31.07,
                     "sumOfPercentagesExclChurchFeePercentage": 29.95,
                     "municipalityTaxPercentage": 19.06,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "12 57  03",
                     "township": "SKÅNES-FAGERHULT",
                     "sumOfPercentagesInclChurchFeePercentage": 31.07,
                     "sumOfPercentagesExclChurchFeePercentage": 29.95,
                     "municipalityTaxPercentage": 19.06,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 1.12
                  },
                  {
                     "townshipCode": "12 57  01",
                     "township": "ÖRKELLJUNGA",
                     "sumOfPercentagesInclChurchFeePercentage": 31.07,
                     "sumOfPercentagesExclChurchFeePercentage": 29.95,
                     "municipalityTaxPercentage": 19.06,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 1.12
                  }
               ]
            },
            {
               "municipality": "ÖRNSKÖLDSVIK",
               "townships": [
                  {
                     "townshipCode": "22 84  04",
                     "township": "ANUNDSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.95,
                     "sumOfPercentagesExclChurchFeePercentage": 33.57,
                     "municipalityTaxPercentage": 22.44,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.44,
                     "churchFeePercentage": 1.38
                  },
                  {
                     "townshipCode": "22 84  02",
                     "township": "ARNÄS",
                     "sumOfPercentagesInclChurchFeePercentage": 34.83,
                     "sumOfPercentagesExclChurchFeePercentage": 33.41,
                     "municipalityTaxPercentage": 22.44,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.42
                  },
                  {
                     "townshipCode": "22 84  12",
                     "township": "BJÖRNA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.88,
                     "sumOfPercentagesExclChurchFeePercentage": 33.38,
                     "municipalityTaxPercentage": 22.44,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.5
                  },
                  {
                     "townshipCode": "22 84  11",
                     "township": "GIDEÅ-TREHÖRNINGSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.83,
                     "sumOfPercentagesExclChurchFeePercentage": 33.41,
                     "municipalityTaxPercentage": 22.44,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.28,
                     "churchFeePercentage": 1.42
                  },
                  {
                     "townshipCode": "22 84  10",
                     "township": "GRUNDSUNDA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.01,
                     "sumOfPercentagesExclChurchFeePercentage": 33.63,
                     "municipalityTaxPercentage": 22.44,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.5,
                     "churchFeePercentage": 1.38
                  },
                  {
                     "townshipCode": "22 84  09",
                     "township": "MO",
                     "sumOfPercentagesInclChurchFeePercentage": 34.88,
                     "sumOfPercentagesExclChurchFeePercentage": 33.38,
                     "municipalityTaxPercentage": 22.44,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.5
                  },
                  {
                     "townshipCode": "22 84  07",
                     "township": "NÄTRA",
                     "sumOfPercentagesInclChurchFeePercentage": 35.03,
                     "sumOfPercentagesExclChurchFeePercentage": 33.56,
                     "municipalityTaxPercentage": 22.44,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.47
                  },
                  {
                     "townshipCode": "22 84  06",
                     "township": "SIDENSJÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 35.03,
                     "sumOfPercentagesExclChurchFeePercentage": 33.56,
                     "municipalityTaxPercentage": 22.44,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.43,
                     "churchFeePercentage": 1.47
                  },
                  {
                     "townshipCode": "22 84  08",
                     "township": "SJÄLEVAD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.88,
                     "sumOfPercentagesExclChurchFeePercentage": 33.38,
                     "municipalityTaxPercentage": 22.44,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.5
                  },
                  {
                     "townshipCode": "22 84  05",
                     "township": "SKORPED",
                     "sumOfPercentagesInclChurchFeePercentage": 34.95,
                     "sumOfPercentagesExclChurchFeePercentage": 33.57,
                     "municipalityTaxPercentage": 22.44,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.44,
                     "churchFeePercentage": 1.38
                  },
                  {
                     "townshipCode": "22 84  01",
                     "township": "ÖRNSKÖLDSVIK",
                     "sumOfPercentagesInclChurchFeePercentage": 34.78,
                     "sumOfPercentagesExclChurchFeePercentage": 33.44,
                     "municipalityTaxPercentage": 22.44,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 1.34
                  }
               ]
            },
            {
               "municipality": "ÖSTERSUND",
               "townships": [
                  {
                     "townshipCode": "23 80  07",
                     "township": "BRUNFLO",
                     "sumOfPercentagesInclChurchFeePercentage": 34.72,
                     "sumOfPercentagesExclChurchFeePercentage": 33.42,
                     "municipalityTaxPercentage": 22.02,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 1.3
                  },
                  {
                     "townshipCode": "23 80  02",
                     "township": "FRÖSÖ, SUNNE OCH NORDERÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.66,
                     "sumOfPercentagesExclChurchFeePercentage": 33.46,
                     "municipalityTaxPercentage": 22.02,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.24,
                     "churchFeePercentage": 1.2
                  },
                  {
                     "townshipCode": "23 80  09",
                     "township": "HÄGGENÅS-LIT-KYRKÅS",
                     "sumOfPercentagesInclChurchFeePercentage": 34.92,
                     "sumOfPercentagesExclChurchFeePercentage": 33.62,
                     "municipalityTaxPercentage": 22.02,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.4,
                     "churchFeePercentage": 1.3
                  },
                  {
                     "townshipCode": "23 80  05",
                     "township": "LOCKNE",
                     "sumOfPercentagesInclChurchFeePercentage": 34.72,
                     "sumOfPercentagesExclChurchFeePercentage": 33.42,
                     "municipalityTaxPercentage": 22.02,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 1.3
                  },
                  {
                     "townshipCode": "23 80  06",
                     "township": "MARIEBY",
                     "sumOfPercentagesInclChurchFeePercentage": 34.72,
                     "sumOfPercentagesExclChurchFeePercentage": 33.42,
                     "municipalityTaxPercentage": 22.02,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 1.3
                  },
                  {
                     "townshipCode": "23 80  04",
                     "township": "NÄS",
                     "sumOfPercentagesInclChurchFeePercentage": 34.72,
                     "sumOfPercentagesExclChurchFeePercentage": 33.42,
                     "municipalityTaxPercentage": 22.02,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.2,
                     "churchFeePercentage": 1.3
                  },
                  {
                     "townshipCode": "23 80  01",
                     "township": "ÖSTERSUND",
                     "sumOfPercentagesInclChurchFeePercentage": 34.61,
                     "sumOfPercentagesExclChurchFeePercentage": 33.44,
                     "municipalityTaxPercentage": 22.02,
                     "countyTaxPercentage": 11.2,
                     "funeralFeePercentage": 0.22,
                     "churchFeePercentage": 1.17
                  }
               ]
            },
            {
               "municipality": "ÖSTERÅKER",
               "townships": [
                  {
                     "townshipCode": "01 17  03",
                     "township": "LJUSTERÖ-KULLA",
                     "sumOfPercentagesInclChurchFeePercentage": 32.06,
                     "sumOfPercentagesExclChurchFeePercentage": 31,
                     "municipalityTaxPercentage": 18.65,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.06
                  },
                  {
                     "townshipCode": "01 17  02",
                     "township": "ÖSTERÅKER-ÖSTRA RYD",
                     "sumOfPercentagesInclChurchFeePercentage": 31.59,
                     "sumOfPercentagesExclChurchFeePercentage": 30.85,
                     "municipalityTaxPercentage": 18.65,
                     "countyTaxPercentage": 12.1,
                     "funeralFeePercentage": 0.1,
                     "churchFeePercentage": 0.74
                  }
               ]
            },
            {
               "municipality": "ÖSTHAMMAR",
               "townships": [
                  {
                     "townshipCode": "03 82  09",
                     "township": "ALUNDA",
                     "sumOfPercentagesInclChurchFeePercentage": 34.49,
                     "sumOfPercentagesExclChurchFeePercentage": 33.1,
                     "municipalityTaxPercentage": 21.69,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.25,
                     "churchFeePercentage": 1.39
                  },
                  {
                     "townshipCode": "03 82  13",
                     "township": "DANNEMORABYGDEN",
                     "sumOfPercentagesInclChurchFeePercentage": 34.48,
                     "sumOfPercentagesExclChurchFeePercentage": 33.16,
                     "municipalityTaxPercentage": 21.69,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.31,
                     "churchFeePercentage": 1.32
                  },
                  {
                     "townshipCode": "03 82  10",
                     "township": "EKEBY",
                     "sumOfPercentagesInclChurchFeePercentage": 34.55,
                     "sumOfPercentagesExclChurchFeePercentage": 33.22,
                     "municipalityTaxPercentage": 21.69,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.37,
                     "churchFeePercentage": 1.33
                  },
                  {
                     "townshipCode": "03 82  04",
                     "township": "FRÖSÅKER",
                     "sumOfPercentagesInclChurchFeePercentage": 34.24,
                     "sumOfPercentagesExclChurchFeePercentage": 33.15,
                     "municipalityTaxPercentage": 21.69,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.3,
                     "churchFeePercentage": 1.09
                  },
                  {
                     "townshipCode": "03 82  11",
                     "township": "SKÄFTHAMMAR-HÖKHUVUD",
                     "sumOfPercentagesInclChurchFeePercentage": 34.55,
                     "sumOfPercentagesExclChurchFeePercentage": 33.22,
                     "municipalityTaxPercentage": 21.69,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.37,
                     "churchFeePercentage": 1.33
                  },
                  {
                     "townshipCode": "03 82  07",
                     "township": "ÖREGRUND-GRÄSÖ",
                     "sumOfPercentagesInclChurchFeePercentage": 34.52,
                     "sumOfPercentagesExclChurchFeePercentage": 33.18,
                     "municipalityTaxPercentage": 21.69,
                     "countyTaxPercentage": 11.16,
                     "funeralFeePercentage": 0.33,
                     "churchFeePercentage": 1.34
                  }
               ]
            },
            {
               "municipality": "ÖSTRA GÖINGE",
               "townships": [
                  {
                     "townshipCode": "12 56  06",
                     "township": "BROBY-EMMISLÖV",
                     "sumOfPercentagesInclChurchFeePercentage": 33.45,
                     "sumOfPercentagesExclChurchFeePercentage": 32.22,
                     "municipalityTaxPercentage": 21.11,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.42,
                     "churchFeePercentage": 1.23
                  },
                  {
                     "townshipCode": "12 56  07",
                     "township": "GLIMÅKRA",
                     "sumOfPercentagesInclChurchFeePercentage": 33.38,
                     "sumOfPercentagesExclChurchFeePercentage": 32.16,
                     "municipalityTaxPercentage": 21.11,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.22
                  },
                  {
                     "townshipCode": "12 56  04",
                     "township": "HJÄRSÅS",
                     "sumOfPercentagesInclChurchFeePercentage": 33.38,
                     "sumOfPercentagesExclChurchFeePercentage": 32.16,
                     "municipalityTaxPercentage": 21.11,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.36,
                     "churchFeePercentage": 1.22
                  },
                  {
                     "townshipCode": "12 56  01",
                     "township": "KNISLINGE-GRYT",
                     "sumOfPercentagesInclChurchFeePercentage": 33.19,
                     "sumOfPercentagesExclChurchFeePercentage": 32.12,
                     "municipalityTaxPercentage": 21.11,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.07
                  },
                  {
                     "townshipCode": "12 56  03",
                     "township": "KVIINGE",
                     "sumOfPercentagesInclChurchFeePercentage": 33.19,
                     "sumOfPercentagesExclChurchFeePercentage": 32.12,
                     "municipalityTaxPercentage": 21.11,
                     "countyTaxPercentage": 10.69,
                     "funeralFeePercentage": 0.32,
                     "churchFeePercentage": 1.07
                  }
               ]
            },
            {
               "municipality": "ÖVERKALIX",
               "townships": [
                  {
                     "townshipCode": "25 13  01",
                     "township": "ÖVERKALIX",
                     "sumOfPercentagesInclChurchFeePercentage": 34.44,
                     "sumOfPercentagesExclChurchFeePercentage": 33.44,
                     "municipalityTaxPercentage": 22.8,
                     "countyTaxPercentage": 10.18,
                     "funeralFeePercentage": 0.46,
                     "churchFeePercentage": 1
                  }
               ]
            },
            {
               "municipality": "ÖVERTORNEÅ",
               "townships": [
                  {
                     "townshipCode": "25 18  01",
                     "township": "ÖVERTORNEÅ",
                     "sumOfPercentagesInclChurchFeePercentage": 33.48,
                     "sumOfPercentagesExclChurchFeePercentage": 32.38,
                     "municipalityTaxPercentage": 21.75,
                     "countyTaxPercentage": 10.18,
                     "funeralFeePercentage": 0.45,
                     "churchFeePercentage": 1.1
                  }
               ]
            }
         ];
      };

      return {
         getMunicipalities: getMunicipalities
      };
      
   }]);
})();