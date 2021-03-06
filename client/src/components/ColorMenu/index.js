import React from "react";
import $ from "jquery"
import '../ColorMenu/style.css';
import ColorPicker from "../ColorMenu/ColorPicker"
import ColorPicker2 from "../ColorMenu/ColorPicker2"
import ColorPickerFont from "../ColorMenu/ColorPickerFont"
    

function toggleColors() {

    $(".circle-picker-container").toggleClass("circleChange")
    $(".bar1").toggleClass("bar1change")
    $(".bar2").toggleClass("bar2change")
    $(".bar3").toggleClass("bar3change")
}

function clickColor1() {
    $(".circle-picker-primary").toggleClass(    "invisible", false)
    $(".circle-picker-secondary").toggleClass(  "invisible", true)
    $(".circle-picker-font").toggleClass(       "invisible", true)
}
function clickColor2() {
    $(".circle-picker-primary").toggleClass(    "invisible", true)
    $(".circle-picker-secondary").toggleClass(  "invisible", false)
    $(".circle-picker-font").toggleClass(       "invisible", true)
}
function clickFont() {
    $(".circle-picker-primary").toggleClass(    "invisible", true)
    $(".circle-picker-secondary").toggleClass(  "invisible", true)
    $(".circle-picker-font").toggleClass(       "invisible", false)
}

export default function Button(props) {
    var button1Stlye = {
        background: props.primaryColor
    };
    var button2Stlye = {
        background: props.secondaryColor
    };
    var button3Stlye = {
        background: props.fontColor
    };
    if(props.button1Stlye){
        button1Stlye.background = props.primaryColor;
    }
    if(props.button2Stlye){
        button2Stlye.background = props.secondaryColor;
    }
    if(props.button3Stlye){
        button3Stlye.background = props.fontColor;
    }
    return (
        <div>
            <div className="MenuContainer" onClick={toggleColors}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <div className="circle-picker-container">
                <div className="buttonBox" >
                    <button style={button1Stlye}    onClick={clickColor1} className="buttonPrimary">Primary</button>
                    <button style={button2Stlye}    onClick={clickColor2} className="buttonSecondary">Secondary</button>
                    <button style={button3Stlye}    onClick={clickFont} className="buttonFont">Font</button>
                </div>
                <div className="circle-picker-primary">
                    <ColorPicker        primaryColor = {props.primaryColor} 
                                        changePrimaryColor={props.changePrimaryColor} />
                </div>
                <div className="circle-picker-secondary">
                    <ColorPicker2       secondaryColor = {props.secondaryColor} 
                                        changeSecondaryColor={props.changeSecondaryColor}/>
                </div>
                <div className="circle-picker-font">
                    <ColorPickerFont    fontColor = {props.fontColor} 
                                        changeFontColor={props.changeFontColor}/>
                </div>
            </div>
        </div>
    );
  };
