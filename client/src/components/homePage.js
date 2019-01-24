import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import RecordVideo from "./recordVideo";
import RecieveVideo from "./recieveVideo";
import DrawOnCanvas from "./drawOnCanvas";
import CanvasRecieve from "./canvasRecieve";
import ButtonAppBar from "./customAppBar";

export class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          teacher: false,
          student: false,
          showButtons: true
        };
      }
      showTeacherInterface = () => {
        this.setState({
          teacher: !this.state.teacher
        });
        this.hideButtons();
      };
      showStudentInterface = () => {
        this.setState({
          student: !this.state.student
        });
        this.hideButtons();
      };
    
      hideButtons = () => {
        this.setState({
          showButtons: false
        });
      };
      render() {
        return (
          <div className="App">
            {/***************** If the user is a teacher************************ */}
            {/* **************************************************************** */}
            <ButtonAppBar />
            {this.state.teacher ? (
              <div>
                <strong>TEACHER</strong>
                <DrawOnCanvas />
                <RecordVideo />
              </div>
            ) : (
              <div />
            )}
    
            {/***************** If the user is a  student ************************/}
            {/* **************************************************************** */}
            {this.state.student ? (
              <div>
                <strong>STUDENT</strong>
                <CanvasRecieve />
                <RecieveVideo />
              </div>
            ) : (
              <div />
            )}
    
            {/******************** Buttons *************************/}
            {/* ************************************************** */}
            {this.state.showButtons ? (
              <div>
                <div style={{ margin: 20 }}>
                  <strong style={{ fontSize: 30 }}>You are a </strong>
                  <Button
                    onClick={this.showTeacherInterface}
                    variant="contained"
                    style={{ marginLeft: 20 }}
                  >
                    <strong>teacher</strong>
                  </Button>
                  <Button
                    onClick={this.showStudentInterface}
                    variant="contained"
                    style={{ marginLeft: 20, marginRight: 20 }}
                  >
                    <strong>student</strong>
                  </Button>
                  <strong style={{ fontSize: 30 }}>?</strong>
                </div>
              </div>
            ) : (
              <div />
            )}
          </div>
        );
      }
}

export default HomePage
