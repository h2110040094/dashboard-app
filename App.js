import React, { useState, useEffect } from 'react';
import './App.css';
import ReactSpeedometer from "react-d3-speedometer";
import Decimal from 'decimal.js';
import iitLogo from './iit-logo.png';  // Import IIT logo
import tihanLogo from './tihan-logo.png';  // Import TIHAN logo
import  axios from 'axios';  // Import axios for API calls
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MapComponent from './MapComponent'; 
import ROSLIB from 'roslib';
import config from './config.js';
import Map from './Map';
import './App.css'; // Optional: import your CSS styles
import steeringWheel from './steering.svg';
import { jsPDF } from "jspdf";

function App({ google }) {
  // Define the coordinates array inside the App function
  const coordinates = [
    
    {"lat": 17.601712115163, "lng": 78.126561750113}, 
    {"lat": 17.601712115163, "lng": 78.126561750113}, 
    {"lat": 17.601712102781, "lng": 78.126560701042}, 
    {"lat": 17.601712102781, "lng": 78.126560701042}, 
    {"lat": 17.601712297645, "lng": 78.126560880706}, 
    {"lat": 17.601712297645, "lng": 78.126560880706}, 
    {"lat": 17.601712198474, "lng": 78.126559867569}, 
    {"lat": 17.601712198474, "lng": 78.126559867569}, 
    {"lat": 17.601711949026, "lng": 78.126558723521}, 
    {"lat": 17.601711949026, "lng": 78.126558723521}, 
    {"lat": 17.601711197931, "lng": 78.126557275909}, 
    {"lat": 17.601711197931, "lng": 78.126557275909}, 
    {"lat": 17.601710077245, "lng": 78.126555651469}, 
    {"lat": 17.601710077245, "lng": 78.126555651469}, 
    {"lat": 17.601708138299, "lng": 78.126553685703}, 
    {"lat": 17.601708138299, "lng": 78.126553685703}, 
    {"lat": 17.60170541958, "lng": 78.126551478464},
    {"lat": 17.60170541958, "lng": 78.126551478464},
     {"lat": 17.601702344663, "lng": 78.126549293536},
     {"lat": 17.601702344663, "lng": 78.126549293536},
     {"lat": 17.601699521071, "lng": 78.126547376676},
     {"lat": 17.601699521071, "lng": 78.126547376676},
     {"lat": 17.601696563766, "lng": 78.126545488029},
     {"lat": 17.601696563766, "lng": 78.126545488029},
     {"lat": 17.601693855835, "lng": 78.126544012616},
     {"lat": 17.601693855835, "lng": 78.126544012616}, 
     {"lat": 17.601691614943, "lng": 78.126542920916},
     {"lat": 17.601691614943, "lng": 78.126542920916},
     {"lat": 17.601689767556, "lng": 78.126542079568},
     {"lat": 17.601689767556, "lng": 78.126542079568},
     {"lat": 17.601688007911, "lng": 78.126541481341}, 
     {"lat": 17.601688007911, "lng": 78.126541481341},
     {"lat": 17.601686282318, "lng": 78.126540991209},
     {"lat": 17.601686282318, "lng": 78.126540991209},
     {"lat": 17.601684677025, "lng": 78.126540526043},
     {"lat": 17.601684677025, "lng": 78.126540526043},
     {"lat": 17.601683155238, "lng": 78.126539840508},
     {"lat": 17.601683155238, "lng": 78.126539840508}, 
     {"lat": 17.601682002853, "lng": 78.126539431857}, 
     {"lat": 17.601682002853, "lng": 78.126539431857},
      {"lat": 17.601681718656, "lng": 78.126538963771},
       {"lat": 17.601681718656, "lng": 78.126538963771}, 
       {"lat": 17.601681708911, "lng": 78.126538481926}, 
       {"lat": 17.601681708911, "lng": 78.126538481926}, 
       {"lat": 17.601681082479, "lng": 78.12653811143},
       {"lat": 17.601681082479, "lng": 78.12653811143},
        {"lat": 17.60168044583, "lng": 78.126537808787}, 
        {"lat": 17.60168044583, "lng": 78.126537808787}, 
        {"lat": 17.601680202079, "lng": 78.12653727449},
        {"lat": 17.601680202079, "lng": 78.12653727449},
        {"lat": 17.601679659228, "lng": 78.126536629566},
         {"lat": 17.601679659228, "lng": 78.126536629566}, 
         {"lat": 17.601679894995, "lng": 78.126536058701}, 
         {"lat": 17.601679894995, "lng": 78.126536058701},
         {"lat": 17.601680632791, "lng": 78.126535591333}, 
         {"lat": 17.601680632791, "lng": 78.126535591333},
         {"lat": 17.601680848947, "lng": 78.126535087992},
         {"lat": 17.601680848947, "lng": 78.126535087992}, 
         {"lat": 17.601680831521, "lng": 78.126534850788},
         {"lat": 17.601680831521, "lng": 78.126534850788},
         {"lat": 17.601680584501, "lng": 78.126534090376}, 
         {"lat": 17.601680584501, "lng": 78.126534090376}, 
         {"lat": 17.601680435065, "lng": 78.126533158761},
          {"lat": 17.601680435065, "lng": 78.126533158761}, 
          {"lat": 17.601680640894, "lng": 78.126532023596}, 
          {"lat": 17.601680640894, "lng": 78.126532023596}, 
          {"lat": 17.601831032739, "lng": 78.126528522052},
           {"lat": 17.601831032739, "lng": 78.126528522052}, 
           {"lat": 17.601864787828, "lng": 78.126554381576}, 
           {"lat": 17.601864787828, "lng": 78.126554381576},
            {"lat": 17.601886947332, "lng": 78.126585188768}, 
            {"lat": 17.601886947332, "lng": 78.126585188768}, 
            {"lat": 17.601906257312, "lng": 78.1266168362}, 
            {"lat": 17.601906257312, "lng": 78.1266168362}, 
            {"lat": 17.601926120465, "lng": 78.126644579927},
             {"lat": 17.601926120465, "lng": 78.126644579927}, 
             {"lat": 17.601945792709, "lng": 78.126668516625},
             {"lat": 17.601945792709, "lng": 78.126668516625},
              {"lat": 17.601965552263, "lng": 78.126688326861}, 
              {"lat": 17.601965552263, "lng": 78.126688326861}, 
              {"lat": 17.601984859423, "lng": 78.126704330967}, 
              {"lat": 17.601984859423, "lng": 78.126704330967}, 
              {"lat": 17.60200320548, "lng": 78.126717686442},
               {"lat": 17.60200320548, "lng": 78.126717686442}, 
               {"lat": 17.602020362609, "lng": 78.126729147734},
                {"lat": 17.602020362609, "lng": 78.126729147734}, 
                {"lat": 17.602036816835, "lng": 78.126738486852},
                {"lat": 17.602036816835, "lng": 78.126738486852},
                {"lat": 17.602053333586, "lng": 78.126744960151},
                {"lat": 17.602053333586, "lng": 78.126744960151}, 
                {"lat": 17.602066344071, "lng": 78.126760162022}, 
                {"lat": 17.602066344071, "lng": 78.126760162022}, 
                {"lat": 17.602077411794, "lng": 78.126778010898}, 
                {"lat": 17.602077411794, "lng": 78.126778010898}, 
                {"lat": 17.602087030792, "lng": 78.126795480998}, 
                {"lat": 17.602087030792, "lng": 78.126795480998},
                 {"lat": 17.602094515174, "lng": 78.126813078642}, 
                 {"lat": 17.602094515174, "lng": 78.126813078642}, 
                 {"lat": 17.602100640466, "lng": 78.126830147487},
                  {"lat": 17.602100640466, "lng": 78.126830147487},
                   {"lat": 17.602103481845, "lng": 78.126848410412},
                    {"lat": 17.602103481845, "lng": 78.126848410412},
                     {"lat": 17.602104097126, "lng": 78.126867339945}, 
                     {"lat": 17.602104097126, "lng": 78.126867339945}, 
                     {"lat": 17.602103226981, "lng": 78.126885946178},
                      {"lat": 17.602103226981, "lng": 78.126885946178},
                       {"lat": 17.602100005133, "lng": 78.126906224401}, 
                       {"lat": 17.602100005133, "lng": 78.126906224401}, 
                       {"lat": 17.602097229765, "lng": 78.126926010295},
                        {"lat": 17.602097229765, "lng": 78.126926010295}, 
                        {"lat": 17.602094000149, "lng": 78.126946447094}, 
                        {"lat": 17.602094000149, "lng": 78.126946447094},
                         {"lat": 17.602089604222, "lng": 78.126968784606}, 
                         {"lat": 17.602089604222, "lng": 78.126968784606},
                          {"lat": 17.602089502209, "lng": 78.126982664656}, 
                          {"lat": 17.602089502209, "lng": 78.126982664656},
                           {"lat": 17.602091257918, "lng": 78.126990713255}, 
                           {"lat": 17.602091257918, "lng": 78.126990713255},
                            {"lat": 17.602091928583, "lng": 78.127001355818}, 
                            {"lat": 17.602091928583, "lng": 78.127001355818}, 
                            {"lat": 17.602090248936, "lng": 78.127015694085}, 
                            {"lat": 17.602090248936, "lng": 78.127015694085}, 
                            {"lat": 17.602091245067, "lng": 78.127024645211},
                            {"lat": 17.602091245067, "lng": 78.127024645211},
                            {"lat": 17.602091259003, "lng": 78.127024811879},
                            {"lat": 17.602091259003, "lng": 78.127024811879},
                            {"lat": 17.602093836025, "lng": 78.12703404779}, 
                            {"lat": 17.602093836025, "lng": 78.12703404779}, 
                            {"lat": 17.602097664204, "lng": 78.127044140732},
                             {"lat": 17.602097664204, "lng": 78.127044140732}, 
                             {"lat": 17.602103168298, "lng": 78.127052109364}, 
                             {"lat": 17.602103168298, "lng": 78.127052109364}, 
                             {"lat": 17.602105779621, "lng": 78.127064289755}, 
                             {"lat": 17.602105779621, "lng": 78.127064289755}, 
                             {"lat": 17.602107716081, "lng": 78.127077463941}, {"lat": 17.602107716081, "lng": 78.127077463941}, 
                             {"lat": 17.602117491267, "lng": 78.127075248373},
                              {"lat": 17.602117491267, "lng": 78.127075248373},
                               {"lat": 17.602127106826, "lng": 78.127073785915},
                                {"lat": 17.602127106826, "lng": 78.127073785915}, {"lat": 17.602134660399, "lng": 78.127075015364},
                                 {"lat": 17.602134660399, "lng": 78.127075015364}, {"lat": 17.602141742982, "lng": 78.127076252524},
                                  {"lat": 17.602141742982, "lng": 78.127076252524}, {"lat": 17.602148985829, "lng": 78.127075892147}, {"lat": 17.602148985829, "lng": 78.127075892147}, 
                                  {"lat": 17.602155713846, "lng": 78.1270752101}, {"lat": 17.602155713846, "lng": 78.1270752101}, {"lat": 17.602161864157, "lng": 78.127074283631}, 
                                  {"lat": 17.602161864157, "lng": 78.127074283631}, {"lat": 17.602168951853, "lng": 78.127073687815},
                                   {"lat": 17.602168951853, "lng": 78.127073687815}, {"lat": 17.602176455307, "lng": 78.127072413731},
                                    {"lat": 17.602176455307, "lng": 78.127072413731}, {"lat": 17.602183662293, "lng": 78.127071063778}, 
                                    {"lat": 17.602183662293, "lng": 78.127071063778}, {"lat": 17.602191730767, "lng": 78.127069921606}, {"lat": 17.602191730767, "lng": 78.127069921606}, {"lat": 17.602201347635, "lng": 78.127068845747},
                                     {"lat": 17.602201347635, "lng": 78.127068845747}, {"lat": 17.602211973329, "lng": 78.127068665919}, 
                                     {"lat": 17.602211973329, "lng": 78.127068665919}, {"lat": 17.60222389363, "lng": 78.127069277388}, {"lat": 17.60222389363, "lng": 78.127069277388}, 
                                     {"lat": 17.60223637927, "lng": 78.127070820885}, {"lat": 17.60223637927, "lng": 78.127070820885},
                                      {"lat": 17.602248569501, "lng": 78.127072597257}, {"lat": 17.602248569501, "lng": 78.127072597257}, {"lat": 17.602260618195, "lng": 78.127074059912},
                                       {"lat": 17.602260618195, "lng": 78.127074059912}, {"lat": 17.602272583665, "lng": 78.127075542832}, 
                                       {"lat": 17.602272583665, "lng": 78.127075542832}, {"lat": 17.602284553977, "lng": 78.127076897211}, 
                                       {"lat": 17.602284553977, "lng": 78.127076897211}, {"lat": 17.602296829794, "lng": 78.12707829484}, 
                                       {"lat": 17.602296829794, "lng": 78.12707829484}, {"lat": 17.602308377844, "lng": 78.127079238773}, 
                                       {"lat": 17.602308377844, "lng": 78.127079238773}, {"lat": 17.602320283248, "lng": 78.127080288511}, 
                                       {"lat": 17.602320283248, "lng": 78.127080288511}, {"lat": 17.602332251508, "lng": 78.127081195544}, {"lat": 17.602332251508, "lng": 78.127081195544}, 
                                       {"lat": 17.602344106197, "lng": 78.127082099152}, {"lat": 17.602344106197, "lng": 78.127082099152},
                                        {"lat": 17.602356267289, "lng": 78.12708300028}, {"lat": 17.602356267289, "lng": 78.12708300028}, {"lat": 17.602368892693, "lng": 78.127084538858}, {"lat": 17.602368892693, "lng": 78.127084538858}, {"lat": 17.602381287604, "lng": 78.127086149201},
                                        {"lat": 17.602381287604, "lng": 78.127086149201}, {"lat": 17.602393997925, "lng": 78.127087972944}, {"lat": 17.602393997925, "lng": 78.127087972944}, {"lat": 17.602407763517, "lng": 78.127090248513}, 
                                        {"lat": 17.602407763517, "lng": 78.127090248513}, {"lat": 17.60242165414, "lng": 78.127091943092}, {"lat": 17.60242165414, "lng": 78.127091943092}, {"lat": 17.602435256039, "lng": 78.127093180982}, {"lat": 17.602435256039, "lng": 78.127093180982}, {"lat": 17.602448006964, "lng": 78.127094357689}, {"lat": 17.602448006964, "lng": 78.127094357689}, {"lat": 17.602461012422, "lng": 78.127095430799}, {"lat": 17.602461012422, "lng": 78.127095430799}, {"lat": 17.60246129226, "lng": 78.12709544509}, {"lat": 17.60246129226, "lng": 78.12709544509}, 
                                        {"lat": 17.60247427563, "lng": 78.127096685348}, {"lat": 17.60247427563, "lng": 78.127096685348}, {"lat": 17.602487445211, "lng": 78.12709806443}, {"lat": 17.602487445211, "lng": 78.12709806443}, {"lat": 17.602500104782, "lng": 78.127099126319}, {"lat": 17.602500104782, "lng": 78.127099126319}, {"lat": 17.602512840974, "lng": 78.127099984517}, {"lat": 17.602512840974, "lng": 78.127099984517}, {"lat": 17.602525071942, "lng": 78.127101211653}, {"lat": 17.602525071942, "lng": 78.127101211653}, {"lat": 17.602537678524, "lng": 78.127102444957},
                                         {"lat": 17.602537678524, "lng": 78.127102444957}, {"lat": 17.602550074318, "lng": 78.127103914258}, {"lat": 17.602550074318, "lng": 78.127103914258}, {"lat": 17.602562319322, "lng": 78.127105057969}, {"lat": 17.602562319322, "lng": 78.127105057969}, {"lat": 17.602574633689, "lng": 78.127105813429}, {"lat": 17.602574633689, "lng": 78.127105813429}, {"lat": 17.602587338056, "lng": 78.127106753388}, {"lat": 17.602587338056, "lng": 78.127106753388}, {"lat": 17.602600221033, "lng": 78.127107921771}, {"lat": 17.602600221033, "lng": 78.127107921771}, {"lat": 17.602612755741, "lng": 78.127108038482}, {"lat": 17.602612755741, "lng": 78.127108038482}, {"lat": 17.602624903156, "lng": 78.127107445459}, 
                                         {"lat": 17.602624903156, "lng": 78.127107445459}, {"lat": 17.602636561641, "lng": 78.127105179195}, {"lat": 17.602636561641, "lng": 78.127105179195}, {"lat": 17.602647772552, "lng": 78.127101779024}, {"lat": 17.602647772552, "lng": 78.127101779024}, {"lat": 17.602658102867, "lng": 78.127097368753}, {"lat": 17.602658102867, "lng": 78.127097368753}, {"lat": 17.602667834684, "lng": 78.127092292131}, {"lat": 17.602667834684, "lng": 78.127092292131}, {"lat": 17.602677618611, "lng": 78.127086042138}, {"lat": 17.602677618611, "lng": 78.127086042138}, {"lat": 17.602686640529, "lng": 78.127078317793}, {"lat": 17.602686640529, "lng": 78.127078317793}, {"lat": 17.602695640072, "lng": 78.127070477642}, {"lat": 17.602695640072, "lng": 78.127070477642}, 
                                         {"lat": 17.602704090278, "lng": 78.127061786214}, {"lat": 17.602704090278, "lng": 78.127061786214}, {"lat": 17.602711861275, "lng": 78.127052486492}, {"lat": 17.602711861275, "lng": 78.127052486492}, {"lat": 17.602718953987, "lng": 78.127042358455}, {"lat": 17.602718953987, "lng": 78.127042358455}, {"lat": 17.602725901667, "lng": 78.127031557659}, {"lat": 17.602725901667, "lng": 78.127031557659}, {"lat": 17.602732712757, "lng": 78.127020998989}, {"lat": 17.602732712757, "lng": 78.127020998989}, {"lat": 17.602739131201, "lng": 78.127010480112}, {"lat": 17.602739131201, "lng": 78.127010480112}, {"lat": 17.602745336393, "lng": 78.126999816276}, {"lat": 17.602745336393, "lng": 78.126999816276}, {"lat": 17.602751006233, "lng": 78.126988998653}, {"lat": 17.602751006233, "lng": 78.126988998653}, {"lat": 17.602756407362, "lng": 78.126977761792}, {"lat": 17.602756407362, "lng": 78.126977761792}, {"lat": 17.602761067077, "lng": 78.12696645874}, {"lat": 17.602761067077, "lng": 78.12696645874}, {"lat": 17.602765683471, "lng": 78.126954714545}, {"lat": 17.602765683471, "lng": 78.126954714545}, {"lat": 17.602769735933, "lng": 78.126942750982}, {"lat": 17.602769735933, "lng": 78.126942750982}, 
                                         {"lat": 17.602773437205, "lng": 78.126930598888}, {"lat": 17.602773437205, "lng": 78.126930598888}, {"lat": 17.602776639597, "lng": 78.126918293749}, {"lat": 17.602776639597, "lng": 78.126918293749}, {"lat": 17.602778699671, "lng": 78.126906230406}, {"lat": 17.602778699671, "lng": 78.126906230406}, {"lat": 17.60277998888, "lng": 78.126893162065}, {"lat": 17.60277998888, "lng": 78.126893162065}, {"lat": 17.602780052267, "lng": 78.126878177875}, {"lat": 17.602780052267, "lng": 78.126878177875}, {"lat": 17.602779239782, "lng": 78.126863249887}, {"lat": 17.602779239782, "lng": 78.126863249887}, {"lat": 17.602777499355, "lng": 78.126848593496}, {"lat": 17.602777499355, "lng": 78.126848593496}, {"lat": 17.602775099256, "lng": 78.126833903517}, {"lat": 17.602775099256, "lng": 78.126833903517}, {"lat": 17.602771753273, "lng": 78.126819565075}, {"lat": 17.602771753273, "lng": 78.126819565075}, {"lat": 17.60276732545, "lng": 78.126805762518}, {"lat": 17.60276732545, "lng": 78.126805762518}, {"lat": 17.602761962824, "lng": 78.126792363383}, {"lat": 17.602761962824, "lng": 78.126792363383}, {"lat": 17.602755760413, "lng": 78.126779376738}, {"lat": 17.602755760413, "lng": 78.126779376738}, {"lat": 17.602755654137, "lng": 78.126779091903}, {"lat": 17.602755654137, "lng": 78.126779091903}, {"lat": 17.602748937148, "lng": 78.126766553557}, {"lat": 17.602748937148, "lng": 78.126766553557}, {"lat": 17.60274205608, "lng": 78.126754109775}, {"lat": 17.60274205608, "lng": 78.126754109775}, {"lat": 17.602734601354, "lng": 78.126742165619}, 
                                         {"lat": 17.602734601354, "lng": 78.126742165619}, {"lat": 17.60272726375, "lng": 78.126729825493}, {"lat": 17.60272726375, "lng": 78.126729825493}, {"lat": 17.602718915985, "lng": 78.12671796142}, {"lat": 17.602718915985, "lng": 78.12671796142}, {"lat": 17.602709943663, "lng": 78.126706736776},
                                          {"lat": 17.602709943663, "lng": 78.126706736776}, 
                                          {"lat": 17.602700896459, "lng": 78.126695790412}, {"lat": 17.602700896459, "lng": 78.126695790412}, {"lat": 17.602691578599, "lng": 78.126685261822}, {"lat": 17.602691578599, "lng": 78.126685261822}, {"lat": 17.602682025033, "lng": 78.126674864039}, {"lat": 17.602682025033, "lng": 78.126674864039}, {"lat": 17.60267204006, "lng": 78.12666509647}, {"lat": 17.60267204006, "lng": 78.12666509647}, {"lat": 17.60266176749, "lng": 78.126655860528}, {"lat": 17.60266176749, "lng": 78.126655860528}, {"lat": 17.60265161903, "lng": 78.126647037466}, {"lat": 17.60265161903, "lng": 78.126647037466}, {"lat": 17.602641657254, "lng": 78.126638920642}, {"lat": 17.602641657254, "lng": 78.126638920642}, {"lat": 17.602630999068, "lng": 78.126632620788}, {"lat": 17.602630999068, "lng": 78.126632620788}, {"lat": 17.602621274564, "lng": 78.126627265637}, {"lat": 17.602621274564, "lng": 78.126627265637}, {"lat": 17.602611072785, "lng": 78.126621526569}, {"lat": 17.602611072785, "lng": 78.126621526569}, {"lat": 17.602602489848, "lng": 78.12661493982}, {"lat": 17.602602489848, "lng": 78.12661493982}, {"lat": 17.602593835612, "lng": 78.126608082896}, {"lat": 17.602593835612, "lng": 78.126608082896}, {"lat": 17.60257925101, "lng": 78.126603777529}, {"lat": 17.60257925101, "lng": 78.126603777529}, {"lat": 17.602560005993, "lng": 78.12660063645}, {"lat": 17.602560005993, "lng": 78.12660063645}, {"lat": 17.602542508832, "lng": 78.126597033282}, {"lat": 17.602542508832, "lng": 78.126597033282}, {"lat": 17.602525962404, "lng": 78.126593421729}, {"lat": 17.602525962404, "lng": 78.126593421729}, {"lat": 17.6025096789, "lng": 78.126590182298}, {"lat": 17.6025096789, "lng": 78.126590182298}, {"lat": 17.602493228857, "lng": 78.126588182868}, {"lat": 17.602493228857, "lng": 78.126588182868}, {"lat": 17.602477030413, "lng": 78.126586786106}, {"lat": 17.602477030413, "lng": 78.126586786106}, {"lat": 17.602460885581, "lng": 78.126586003343}, {"lat": 17.602460885581, "lng": 78.126586003343}, {"lat": 17.602444513738, "lng": 78.126585560123}, {"lat": 17.602444513738, "lng": 78.126585560123}, {"lat": 17.602427929587, "lng": 78.12658566682}, {"lat": 17.602427929587, "lng": 78.12658566682}, {"lat": 17.602411275221, "lng": 78.126586016157}, {"lat": 17.602411275221, "lng": 78.126586016157}, {"lat": 17.60239478575, "lng": 78.126586512903}, 
                                          {"lat": 17.60239478575, "lng": 78.126586512903}, {"lat": 17.602378305735, "lng": 78.126587279789}, {"lat": 17.602378305735, "lng": 78.126587279789}, {"lat": 17.602362237707, "lng": 78.126588098467}, {"lat": 17.602362237707, "lng": 78.126588098467}, {"lat": 17.602345936538, "lng": 78.126588810706}, {"lat": 17.602345936538, "lng": 78.126588810706}, {"lat": 17.602330283584, "lng": 78.126589531799}, {"lat": 17.602330283584, "lng": 78.126589531799}, {"lat": 17.602314694792, "lng": 78.126590277565}, {"lat": 17.602314694792, "lng": 78.126590277565}, 
                                          {"lat": 17.602299383302, "lng": 78.12659099302}, {"lat": 17.602299383302, "lng": 78.12659099302}, {"lat": 17.602283823897, "lng": 78.126591845475}, 
                                          {"lat": 17.602283823897, "lng": 78.126591845475}, {"lat": 17.60226771784, "lng": 78.126592591824}, {"lat": 17.60226771784, "lng": 78.126592591824}, {"lat": 17.602251475517, "lng": 78.126593204379}, {"lat": 17.602251475517, "lng": 78.126593204379}, {"lat": 17.602235730963, "lng": 78.126594097156}, {"lat": 17.602235730963, "lng": 78.126594097156}, {"lat": 17.602220019674, "lng": 78.126594906485}, {"lat": 17.602220019674, "lng": 78.126594906485}, {"lat": 17.602204236097, "lng": 78.126595650231}, {"lat": 17.602204236097, "lng": 78.126595650231}, {"lat": 17.602188216269, "lng": 78.126596529926}, {"lat": 17.602188216269, "lng": 78.126596529926}, {"lat": 17.602172106734, "lng": 78.126597296991}, {"lat": 17.602172106734, "lng": 78.126597296991}, {"lat": 17.602156359454, "lng": 78.126598049903}, {"lat": 17.602156359454, "lng": 78.126598049903}, {"lat": 17.602140852567, "lng": 78.126598505162}, {"lat": 17.602140852567, "lng": 78.126598505162}, {"lat": 17.602125749124, "lng": 78.126599328061}, {"lat": 17.602125749124, "lng": 78.126599328061}, {"lat": 17.602111228164, "lng": 78.126601867221}, {"lat": 17.602111228164, "lng": 78.126601867221}, {"lat": 17.602110905533, "lng": 78.126601912081}, {"lat": 17.602110905533, "lng": 78.126601912081}, {"lat": 17.602096447352, "lng": 78.126606845234}, {"lat": 17.602096447352, "lng": 78.126606845234}, {"lat": 17.602082700355, "lng": 78.126613359444}, {"lat": 17.602082700355, "lng": 78.126613359444}, {"lat": 17.602065898819, "lng": 78.126620869784}, {"lat": 17.602065898819, "lng": 78.126620869784}, {"lat": 17.602048835368, "lng": 78.126629982301}, {"lat": 17.602048835368, "lng": 78.126629982301}, {"lat": 17.602046514779, "lng": 78.126643428513}, {"lat": 17.602046514779, "lng": 78.126643428513}, {"lat": 17.602043376933, "lng": 78.126656875585}, {"lat": 17.602043376933, "lng": 78.126656875585}, {"lat": 17.602040946578, "lng": 78.126669006598}, {"lat": 17.602040946578, "lng": 78.126669006598}, {"lat": 17.60203951851, "lng": 78.126681151074}, {"lat": 17.60203951851, "lng": 78.126681151074}, {"lat": 17.6020383446, "lng": 78.126695388605}, {"lat": 17.6020383446, "lng": 78.126695388605}, {"lat": 17.602038926506, "lng": 78.12671088598}, {"lat": 17.602038926506, "lng": 78.12671088598}, {"lat": 17.602039933096, "lng": 78.126726429546}, {"lat": 17.602039933096, "lng": 78.126726429546}, {"lat": 17.602040617793, "lng": 78.126742422727},
                                           {"lat": 17.602040617793, "lng": 78.126742422727}, {"lat": 17.602040995324, "lng": 78.126758279239}, {"lat": 17.602040995324, "lng": 78.126758279239}, {"lat": 17.602041022021, "lng": 78.126772878645}, {"lat": 17.602041022021, "lng": 78.126772878645}, {"lat": 17.602043239336, "lng": 78.126782397849}, {"lat": 17.602043239336, "lng": 78.126782397849}, {"lat": 17.60204645843, "lng": 78.126788819595}, {"lat": 17.60204645843, "lng": 78.126788819595}, {"lat": 17.602037411884, "lng": 78.126805048758}, {"lat": 17.602037411884, "lng": 78.126805048758}, {"lat": 17.602022655216, "lng": 78.126822478376}, {"lat": 17.602022655216, "lng": 78.126822478376}, {"lat": 17.60200653785, "lng": 78.126836058446}, {"lat": 17.60200653785, "lng": 78.126836058446}, {"lat": 17.601991227715, "lng": 78.126845569358}, {"lat": 17.601991227715, "lng": 78.126845569358}, {"lat": 17.601976977908, "lng": 78.12685166353}, {"lat": 17.601976977908, "lng": 78.12685166353}, {"lat": 17.601961353312, "lng": 78.126855343124}, {"lat": 17.601961353312, "lng": 78.126855343124}, {"lat": 17.601946300234, "lng": 78.126856899737}, {"lat": 17.601946300234, "lng": 78.126856899737}, {"lat": 17.601930597885, "lng": 78.12685581446}, {"lat": 17.601930597885, "lng": 78.12685581446}, {"lat": 17.601916013843, "lng": 78.126854591229}, {"lat": 17.601916013843, "lng": 78.126854591229}, {"lat": 17.601902328915, "lng": 78.126853610566}, {"lat": 17.601902328915, "lng": 78.126853610566}, {"lat": 17.601889205563, "lng": 78.126853104931}, {"lat": 17.601889205563, "lng": 78.126853104931}, {"lat": 17.601876096863, "lng": 78.126853046117}, {"lat": 17.601876096863, "lng": 78.126853046117}, {"lat": 17.601862669917, "lng": 78.126853538154}, {"lat": 17.601862669917, "lng": 78.126853538154}, {"lat": 17.601850059573, "lng": 78.126854550637}, {"lat": 17.601850059573, "lng": 78.126854550637},
                                           {"lat": 17.60183735393, "lng": 78.126855363104}, {"lat": 17.60183735393, "lng": 78.126855363104}, {"lat": 17.601825738075, "lng": 78.126856528199}, {"lat": 17.601825738075, "lng": 78.126856528199}, {"lat": 17.60181445488, "lng": 78.126857116033}, {"lat": 17.60181445488, "lng": 78.126857116033}, {"lat": 17.601803258226, "lng": 78.126858964959}, {"lat": 17.601803258226, "lng": 78.126858964959}, {"lat": 17.601792311523, "lng": 78.126860428646}, {"lat": 17.601792311523, "lng": 78.126860428646}, {"lat": 17.601780424232, "lng": 78.126860423}, {"lat": 17.601780424232, "lng": 78.126860423}, {"lat": 17.601768341661, "lng": 78.126860716908}, {"lat": 17.601768341661, "lng": 78.126860716908}, {"lat": 17.601756568576, "lng": 78.126860538575}, {"lat": 17.601756568576, "lng": 78.126860538575}, {"lat": 17.601743989509, "lng": 78.126859160565}, {"lat": 17.601743989509, "lng": 78.126859160565}, {"lat": 17.601731865983, "lng": 78.12685773772}, {"lat": 17.601731865983, "lng": 78.12685773772}, {"lat": 17.601720050902, "lng": 78.126856585867}, {"lat": 17.601720050902, "lng": 78.126856585867}, {"lat": 17.601709012213, "lng": 78.126855364411}, {"lat": 17.601709012213, "lng": 78.126855364411}, {"lat": 17.601698440683, "lng": 78.126854147891}, {"lat": 17.601698440683, "lng": 78.126854147891}, {"lat": 17.601688142535, "lng": 78.126852993915}, {"lat": 17.601688142535, "lng": 78.126852993915}, {"lat": 17.6016780188, "lng": 78.126852056806}, {"lat": 17.6016780188, "lng": 78.126852056806}, {"lat": 17.601667955352, "lng": 78.126851297944}, {"lat": 17.601667955352, "lng": 78.126851297944}, {"lat": 17.601657839645, "lng": 78.126850753309}, {"lat": 17.601657839645, "lng": 78.126850753309}, {"lat": 17.601647731835, "lng": 78.12685044028},
                                           {"lat": 17.601647731835, "lng": 78.12685044028}, {"lat": 17.601637569984, "lng": 78.126850469607}, {"lat": 17.601637569984, "lng": 78.126850469607}, {"lat": 17.601628132145, "lng": 78.126851197849}, {"lat": 17.601628132145, "lng": 78.126851197849}, {"lat": 17.601619363307, "lng": 78.126852167317}, {"lat": 17.601619363307, "lng": 78.126852167317}, {"lat": 17.601611642155, "lng": 78.126854006049}, {"lat": 17.601611642155, "lng": 78.126854006049}, {"lat": 17.601605575628, "lng": 78.126857074488}, {"lat": 17.601605575628, "lng": 78.126857074488}, {"lat": 17.601600565774, "lng": 78.126860688183}, {"lat": 17.601600565774, "lng": 78.126860688183}, {"lat": 17.601595700786, "lng": 78.126864074844}, 
                                          {"lat": 17.601595700786, "lng": 78.126864074844}, {"lat": 17.601590806529, "lng": 78.126867166118}, {"lat": 17.601590806529, "lng": 78.126867166118}, {"lat": 17.601604404886, "lng": 78.126858042429}, {"lat": 17.601604404886, "lng": 78.126858042429}, {"lat": 17.601601267756, "lng": 78.126859911191}, {"lat": 17.601601267756,
                           "lng": 78.126859911191}
  ];
  
  

  const [gpsCoordinates, setGpsCoordinates] = useState(coordinates[0]); // Start with the first coordinate
  const [currentCoordinateIndex, setCurrentCoordinateIndex] = useState(0); // Track the current coordinate index

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCoordinateIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % coordinates.length; // Cycle through the coordinates
        setGpsCoordinates(coordinates[nextIndex]); // Update the GPS coordinates
        return nextIndex; // Return the next index
      });
    }, 200); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  // State variables for vehicle data
  const [obstacleDistance, setObstacleDistance] = useState(new Decimal(0));
  const [steeringAngle, setSteeringAngle] = useState(new Decimal(0));
  const [speed, setSpeed] = useState(new Decimal(0));
  const [emergencyBrakeStatus, setEmergencyBrakeStatus] = useState(new Decimal(0));
  const [parkingBrakeStatus, setParkingBrakeStatus] = useState(new Decimal(0));
  const [driveModeStatus, setDriveModeStatus] = useState(new Decimal(0));


  
  // State variables for internet speed data
  const [downloadSpeed, setDownloadSpeed] = useState(new Decimal(0));
  const [uploadSpeed, setUploadSpeed] = useState(new Decimal(0));

  // State variables for sensor data
  const [details, setDetails] = useState({
    velodyne: {
      packetCount: 0,
      averageRate: 0,
      thresholdStatus: false,
    },
    livox: {
      packetCount: 0,
      averageRate: 0,
      thresholdStatus: false,
    },
    gps: {
      packetCount: 0,
      averageRate: 0,
      thresholdStatus: false,
    },
    zed: {
      packetCount: 0,
      averageRate: 0,
      thresholdStatus: false,
    },
  });

  const packetThreshold = 10; // Define your threshold here

  // Fetch obstacle distance
  useEffect(() => {
    const fetchObstacleDistance = async () => {
      try {
        const response = await fetch("http://192.168.21.236:5023/api/dis");
        const data = await response.json();
        const distanceValue = parseFloat(data.min_dis.split(': ')[1]);
        setObstacleDistance(new Decimal(distanceValue));
      } catch (error) {
        console.error("Error fetching obstacle distance:", error);
      }
    };
    fetchObstacleDistance();
    const intervalId = setInterval(fetchObstacleDistance, 1000);
    return () => clearInterval(intervalId);
  }, []);


  

  // Fetch steering angle
  useEffect(() => {
    const fetchSteeringAngle = async () => {
      try {
        const response = await fetch("http://192.168.21.236:5023/api/steer");
        const data = await response.json();
        const steerValue = parseFloat(data.steer.split(': ')[1]);
        console.log("Steering angle fetched:", steerValue); // For debugging
        setSteeringAngle(new Decimal(steerValue));
      } catch (error) {
        console.error("Error fetching steering angle:", error);
      }
    };

  

    fetchSteeringAngle();
    const intervalId = setInterval(fetchSteeringAngle, 500);
    return () => clearInterval(intervalId);
  }, []);

  // Fetch speed
  useEffect(() => {
    const fetchSpeed = async () => {
      try {
        const response = await fetch("http://192.168.21.236:5023/api/speed");
        const data = await response.json();
        const speedValue = parseFloat(data.speed.split(': ')[1]);
        setSpeed(new Decimal(speedValue));
      } catch (error) {
        console.error("Error fetching speed:", error);
      }
    };
    fetchSpeed();
    const intervalId = setInterval(fetchSpeed, 1000);
    return () => clearInterval(intervalId);
  }, []);

  // Fetch emergency brake status
  useEffect(() => {
    const fetchEmergencyBrakeStatus = async () => {
      try {
        const response = await fetch("http://192.168.21.236:5023/api/emergency");
        const data = await response.json();
        const brakeValue = parseFloat(data.emergency_status.split(': ')[1]);
        setEmergencyBrakeStatus(new Decimal(brakeValue));
      } catch (error) {
        console.error("Error fetching emergency brake status:", error);
      }
    };
    fetchEmergencyBrakeStatus();
    const intervalId = setInterval(fetchEmergencyBrakeStatus, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchDriveModeStatus = async () => {
      try {
        const response = await fetch("http://192.168.21.236:5023/api/drive_mode_status");  // Adjust API endpoint if needed
        const data = await response.json();
        const modeValue = parseFloat(data.drive_mode_status.split(': ')[1]); // Assuming data format like `drive_mode_status: 1`
        setDriveModeStatus(new Decimal(modeValue));
      } catch (error) {
        console.error("Error fetching drive mode status:", error);
      }
    };
    fetchDriveModeStatus();
    const intervalId = setInterval(fetchDriveModeStatus, 1000);  // Fetch status every second
    return () => clearInterval(intervalId);  // Clean up interval on component unmount
  }, []);
  
  useEffect(() => {
    const fetchParkingBrakeStatus = async () => {
      try {
        const response = await fetch("http://192.168.21.236:5023/api/parking_brake_status"); // Replace with the correct API URL
        const data = await response.json();
        const brakeValue = parseFloat(data.parking_brake_status.split(': ')[1]); // Parse the parking brake status value
        setParkingBrakeStatus(new Decimal(brakeValue)); // Assuming you have a state for parking brake
      } catch (error) {
        console.error("Error fetching parking brake status:", error);
      }
    };
  
    fetchParkingBrakeStatus(); // Fetch immediately on mount
    const intervalId = setInterval(fetchParkingBrakeStatus, 1000); // Fetch periodically every 1 second
    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);
  

  // Fetch internet speed data (download and upload)
  useEffect(() => {
    const fetchSpeedTestData = async () => {
      try {
        const response = await fetch("http://192.168.21.236:5005/speedtest");
        const data = await response.json();

        const downloadValue = parseFloat(data.download_speed.split(' ')[0]);
        setDownloadSpeed(new Decimal(downloadValue));

        const uploadValue = parseFloat(data.upload_speed.split(' ')[0]);
        setUploadSpeed(new Decimal(uploadValue));
      } catch (error) {
        console.error("Error fetching speedtest data:", error);
      }
    };
    fetchSpeedTestData();
    const intervalId = setInterval(fetchSpeedTestData, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const mapSteeringAngle = (angle) => {
    const minApiAngle = -450; // Full left
    const maxApiAngle = 450;  // Full right
    const minImageAngle = -90; // Full left for the image
    const maxImageAngle = 90;  // Full right for the image
    
    return ((angle - minApiAngle) * (maxImageAngle - minImageAngle)) / (maxApiAngle - minApiAngle) + minImageAngle;
  };
  const fetchVelodyneData = async () => {
    try {
      const response = await axios.get('http://192.168.21.236:5088/api/velodyne');
      const data = response.data;
  
      console.log(data); // Check the structure of the response
  
      if (data.message === 'Velodyne working!') {
        const averageRate = parseFloat(data.average_rate) || 0;
  
        setDetails((prevDetails) => ({
          ...prevDetails,
          velodyne: {
            ...prevDetails.velodyne,
            packetCount: prevDetails.velodyne.packetCount + 1,
            averageRate: averageRate,
            thresholdStatus: prevDetails.velodyne.packetCount + 1 > packetThreshold,
          },
        }));
      }
    } catch (error) {
      console.error('Error fetching Velodyne data:', error);
    }
  };
  
// Fetch Livox data
const fetchLivoxData = async () => {
  try {
    const response = await axios.get('http://192.168.21.236:5082/api/livox'); // Adjust the API endpoint accordingly
    const data = response.data;

    console.log(data); // Check the structure of the response

    if (data.message === 'Livox working!') {
      const averageRate = parseFloat(data.average_rate) || 0;

      setDetails((prevDetails) => ({
        ...prevDetails,
        livox: {
          ...prevDetails.livox,
          packetCount: prevDetails.livox.packetCount + 1,
          averageRate: averageRate,
          thresholdStatus: prevDetails.livox.packetCount + 1 > packetThreshold,
        },
      }));
    }
  } catch (error) {
    console.error('Error fetching Livox data:', error);
  }
};


  // Fetch GPS data
  const fetchGpsData = async () => {
    try {
      const response = await axios.get('http://192.168.21.236:5083/api/gps');
      const data = response.data;

      if (data) {
        const averageRate = parseFloat(data.average_rate) || 0;
        const packetCount = data.packet_count || 0;

        setDetails((prevDetails) => ({
          ...prevDetails,
          gps: {
            ...prevDetails.gps,
            averageRate,
            packetCount: prevDetails.gps.packetCount + 1, // Increment packet count
            thresholdStatus: packetCount > packetThreshold, // Check threshold for GPS
          },
        }));
      }
    } catch (error) {
      console.error('Error fetching GPS data:', error);
    }
  };

  // Fetch ZED camera data
  const fetchZedData = async () => {
    try {
      // Simulating the fetching of ZED data (frame rate in this case)
      const frameRate = 60.05254433892159; // Replace this with actual data fetching logic

      setDetails((prevDetails) => ({
        ...prevDetails,
        zed: {
          ...prevDetails.zed,
          packetCount: prevDetails.zed.packetCount + 1, // Increment packet count
          averageRate: frameRate, // Update the average rate with frame rate
          thresholdStatus: prevDetails.zed.packetCount + 1 > packetThreshold, // Check threshold for ZED
        },
      }));
    } catch (error) {
      console.error('Error fetching ZED data:', error);
    }
  };

  // Set intervals for Velodyne, Livox, GPS, and ZED
  useEffect(() => {
    fetchVelodyneData();
    const velodyneInterval = setInterval(fetchVelodyneData, 1000);
    fetchLivoxData();
    const livoxInterval = setInterval(fetchLivoxData, 1000);
    fetchGpsData();
    const gpsInterval = setInterval(fetchGpsData, 1000);
    fetchZedData();
    const zedInterval = setInterval(fetchZedData, 1000);
    
    return () => {
      clearInterval(velodyneInterval);
      clearInterval(livoxInterval);
      clearInterval(gpsInterval);
      clearInterval(zedInterval);
    };
  }, []);
  const handleDownload = async () => {
    const doc = new jsPDF();
    doc.setFontSize(12);


    // Define starting position for text
    const startX = 10; // X position
    let startY = 10; // Y position
    const lineHeight = 10; // Space between lines


    // Initialize variables for Velodyne data
    let velodyneAverageRate = 0;
    let averageSpeed = 0;
    let downloadSpeedValue = 0;
    let uploadSpeedValue = 0;
    let livoxAverageRate = 0;

    

    // Fetch Velodyne data
    try {
        const velodyneResponse = await axios.get('http://192.168.21.236:5088/api/velodyne');
        const velodyneData = velodyneResponse.data;

        velodyneAverageRate = parseFloat(velodyneData.average_rate) || 0;
       
    } catch (error) {
        console.error("Error fetching Velodyne data:", error);
        doc.text("Error fetching Velodyne data.", 10, 90);
    }

    // Fetch average speed data
    try {
        const speedResponse = await axios.get('http://192.168.21.236:5023/api/speed'); // Adjust the API endpoint accordingly
        const speedData = speedResponse.data;

        averageSpeed = parseFloat(speedData.speed.split(': ')[1]) || 0; // Adjust based on your API response format
    } catch (error) {
        console.error("Error fetching speed data:", error);
        doc.text("Error fetching speed data.", 10, 100); // Indicate error in PDF
        startY += lineHeight;
    }

    try {
      const downloadResponse = await axios.get('http://192.168.21.236:5005/speedtest'); // Adjust the API endpoint accordingly
      const downloadData = downloadResponse.data;

      downloadSpeedValue = parseFloat(downloadData.download_speed.split(' ')[0]) || 0; // Adjust based on your API response format

  } catch (error) {
      console.error("Error fetching download speed data:", error);
      doc.text("Error fetching download speed data.", 10, 110); // Indicate error in PDF
      startY += lineHeight;
  }

  // Fetch upload speed data
  try {
      const uploadResponse = await axios.get('http://192.168.21.236:5005/speedtest'); // Adjust the API endpoint accordingly
      const uploadData = uploadResponse.data;

      uploadSpeedValue = parseFloat(uploadData.upload_speed.split(' ')[0]) || 0; // Adjust based on your API response format
  } catch (error) {
      console.error("Error fetching upload speed data:", error);
      doc.text("Error fetching upload speed data.", 10, 120); // Indicate error in PDF
      startY += lineHeight;
  }

    // Initialize variables for Livox data
    
 

    // Fetch Livox data
    try {
        const livoxResponse = await axios.get('http://192.168.21.236:5082/api/livox'); // Adjust the API endpoint accordingly
        const livoxData = livoxResponse.data;

        livoxAverageRate = parseFloat(livoxData.average_rate) || 0;
       
    } catch (error) {
        console.error("Error fetching Livox data:", error);
    }
    doc.text(`Obstacle Distance: ${obstacleDistance.toNumber()} meters`, startX, startY);
    startY += lineHeight;
    doc.text(`Speed: ${speed.toNumber()} km/h`, startX, startY);
    startY += lineHeight;
    doc.text(`Steering Angle: ${steeringAngle.toNumber()}°`, startX, startY);
    startY += lineHeight;
    doc.text(`Emergency Brake Status: ${emergencyBrakeStatus.toNumber()}`, startX, startY);
    startY += lineHeight;
    doc.text(`Drive Mode Status: ${driveModeStatus.toNumber()}`, startX, startY);
    startY += lineHeight;
    doc.text(`Parking Brake Status: ${parkingBrakeStatus.toNumber()}`, startX, startY);
    startY += lineHeight;
    doc.text(`Download Speed: ${downloadSpeedValue.toFixed(2)} Mbps`, startX, startY);
    startY += lineHeight;
    doc.text(`Upload Speed: ${uploadSpeedValue.toFixed(2)} Mbps`, startX, startY);
    startY += lineHeight;
    doc.text(`Velodyne Average Rate: ${velodyneAverageRate.toFixed(2)} MBps`, startX, startY);
    startY += lineHeight;
    doc.text(`Livox Average Rate: ${livoxAverageRate.toFixed(2)} MBps`, startX, startY);
    // Add other data to the PDF
    doc.text(`Obstacle Distance: ${obstacleDistance.toNumber()} meters`, 10, 10);
    doc.text(`Speed: ${speed.toNumber()} km/h`, 10, 20);
    doc.text(`Steering Angle: ${steeringAngle.toNumber()}°`, 10, 30);
    doc.text(`Emergency Brake Status: ${emergencyBrakeStatus.toNumber()}`, 10, 40);
    doc.text(`Drive Mode Status: ${driveModeStatus.toNumber()}`, 10, 50);
    doc.text(`Parking Brake Status: ${parkingBrakeStatus.toNumber()}`, 10, 60);
    doc.text(`Download Speed: ${downloadSpeed.toNumber()} Mbps`, 10, 70);
    doc.text(`Upload Speed: ${uploadSpeed.toNumber()} Mbps`, 10, 80);
    
    // Add live Velodyne data to the PDF
    doc.text(`Velodyne Average Rate: ${velodyneAverageRate.toFixed(2)} MBps`, 10, 90);

    
    // Add live Livox data to the PDF
    doc.text(`Livox Average Rate: ${livoxAverageRate.toFixed(2)} MBps`, 10, 120);
   
    
    // Save the PDF
    doc.save('dashboard_data.pdf'); // Save the PDF with a name  
};
       

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={iitLogo} alt="IIT Logo" className="logo left-logo" />
        <h1>Remote Monitoring Dashboard</h1>
        <img src={tihanLogo} alt="TIHAN Logo" className="logo right-logo" />
      </header>


      {/* Download button */}

      <button className="download-button" onClick={handleDownload}>
        Download Data
      </button>


      {/* Flex container for all components */}
      <div className="horizontal-flex-container">
        {/* MINIMUM OBSTACLE DISTANCE */}
        <div className="component">
          <h2 className="component-heading">MINIMUM OBSTACLE DISTANCE</h2>
          <ReactSpeedometer
            value={obstacleDistance.toNumber()}
            minValue={0}
            maxValue={100}
            needleColor="blue"
            startColor="green"
            segments={11}
            endColor="red"
            currentValueText={`Distance: ${obstacleDistance.toFixed(2)} meters`}
          />
        </div>

        {/* SPEED */}
        <div className="component">
          <h2 className="component-heading">SPEED</h2>
          <ReactSpeedometer
            value={speed.toNumber()}
            minValue={0}
            maxValue={16}
            needleColor="blue"
            startColor="green"
            segments={16}
            endColor="red"
            currentValueText={`Speed: ${speed.toFixed(2)} km/h`}
          />
        </div>

        {/* DRIVE MODE STATUS */}
        <div className="component">
          <h2 className="component-heading">DRIVE MODE STATUS</h2>
          <ReactSpeedometer
            value={driveModeStatus.toNumber()}
            minValue={0}
            maxValue={3}
            needleColor="blue"
            startColor="green"
            segments={3}
            endColor="red"
            needlePosition={driveModeStatus.toNumber() === 0
              ? 1.5 // Neutral (needle straight up)
              : driveModeStatus.toNumber() === 1
              ? 1 // Forward (needle to the right)
              : driveModeStatus.toNumber() === 3
              ? 0 // Reverse (needle to the left)
              : 3.5} // Default to neutral in case of an unknown value
            currentValueText={`Drive Mode: ${
              driveModeStatus.toNumber() === 0
                ? "Neutral"
                : driveModeStatus.toNumber() === 1
                ? "Forward"
                : driveModeStatus.toNumber() === 3
                ? "Reverse"
                : "Unknown"
            }`}
          />
        </div>

        {/* PARKING BRAKE STATUS */}
        <div className="component">
          <h2 className="component-heading">PARKING BRAKE STATUS</h2>
          <ReactSpeedometer
            value={parkingBrakeStatus.toNumber()}
            minValue={0}
            maxValue={1}
            needleColor="blue"
            startColor="green"
            segments={2}
            endColor="red"
            currentValueText={`Parking Brake: ${parkingBrakeStatus.toNumber() === 1}`}
          />
        </div>

        {/* STEERING ANGLE */}
        <div className="component">
          <h2 className="component-heading">STEERING ANGLE</h2>
          <ReactSpeedometer
            value={steeringAngle.toNumber()}
            minValue={-25}
            maxValue={25}
            needleColor="blue"
            startColor="yellow"
            segments={11}
            endColor="red"
            currentValueText={`Steering Angle: ${steeringAngle.toFixed(2)}°`}
          />
        </div>
        
        <div className="steering-wheel-container">
  <h1 className="steering-wheel-label"><b>STEERING WHEEL</b></h1> {/* Steering wheel label */}
  <img
    src={steeringWheel}
    alt="Steering Wheel"
    style={{
      transform: `rotate(${steeringAngle}deg)`, // Rotate the wheel based on the steering angle
      transition: 'transform 0.2s', // Smooth transition for rotation
    }}
    className="steering-wheel"
  />
</div>

        {/* DOWNLOAD */}
        <div className="component">
          <h2 className="component-heading">EMERGENCY BRAKE STATUS</h2>
          <ReactSpeedometer
            value={emergencyBrakeStatus.toNumber()}
            minValue={0}
            maxValue={1}
            needleColor="blue"
            startColor="green"
            segments={2}
            endColor="red"
            currentValueText={`Emergency Brake: ${emergencyBrakeStatus.toFixed(0)}`}
          />
        </div>
        
        {/* DOWNLOAD */}
        <div className="component">
          <h2 className="component-heading">DOWNLOAD</h2>
          <ReactSpeedometer
            value={uploadSpeed.toNumber()}
            minValue={0}
            maxValue={400}
            needleColor="blue"
            startColor="green"
            segments={10}
            endColor="red"
            currentValueText={`Upload: ${uploadSpeed.toFixed(2)} Mbps`}
          />
        </div>
        

        {/* DOWNLOAD */}
        <div className="component">
          <h2 className="component-heading">UPLOAD SPEED</h2>
          <ReactSpeedometer
            value={uploadSpeed.toNumber()}
            minValue={0}
            maxValue={400}
            needleColor="blue"
            startColor="green"
            segments={10}
            endColor="red"
            currentValueText={`Upload: ${uploadSpeed.toFixed(2)} Mbps`}
          />
        </div>

        {/* VELODYNE */}
        <div className="sensor-component">
          <h2 className="component-heading">VELODYNE</h2>
          <ReactSpeedometer
            value={details.velodyne.averageRate}
            minValue={0}
            maxValue={100} // Adjust based on your expected data
            needleColor="blue"
            startColor="green"
            segments={10}
            endColor="red"
            currentValueText={`Avg Rate: ${details.velodyne.averageRate.toFixed(2)} MBps`}
          />
          <p style={{ fontSize: '24px' }}><strong>Ethernet Connection:</strong> Yes</p>
          <p style={{ fontSize: '22px' }}><strong>Packet Count:</strong> {details.velodyne.packetCount}</p>
          <p style={{ fontSize: '22px' }}><strong>Status:</strong> {details.velodyne.thresholdStatus ? 'Above' : 'Below'} Threshold</p>
        </div>

        {/* LIVOX */}
        <div className="sensor-component">
          <h2 className="component-heading">LIVOX</h2>
          <ReactSpeedometer
            value={details.livox.averageRate}
            minValue={0}
            maxValue={100} // Adjust accordingly
            needleColor="blue"
            startColor="green"
            segments={10}
            endColor="red"
            currentValueText={`Avg Rate: ${details.livox.averageRate.toFixed(2)} MBps`}
          />
          <p style={{ fontSize: '24px' }}><strong>Ethernet Connection:</strong> Yes</p>
          <p style={{ fontSize: '22px' }}><strong>Packet Count:</strong> {details.livox.packetCount}</p>
          <p style={{ fontSize: '22px' }}><strong>Status:</strong> {details.livox.thresholdStatus ? 'Above' : 'Below'} Threshold</p>
        </div>
      </div>

      {/* Camera Feed */}
      <div className="camera-feed-container">
        <h2 className="component-heading">CAMERA FEED</h2>
        <iframe 
          src="http://192.168.21.171:7777/video_feed" 
          title="Camera Feed" 
          width="640" 
          height="480" 
          allowFullScreen 
        />
      </div>

      {/* Map Component */}
      <div className="map-container">
        <MapComponent gpsCoordinates={gpsCoordinates} />
      </div>
    </div>
  );
}
export default App;

