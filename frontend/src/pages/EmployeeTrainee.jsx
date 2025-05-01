import React from 'react';
import EmployeeTraineeImg from '../assets/Training.jpg';
import './EmployeeTrainee.css';

const EmployeeTrainee = () => {
    return (
        <div className="employee-trainee-container">
            <div className="employee-trainee-content">
                <div className="text-section">
                    <h1>Employee Training and Development</h1>
                    <ul>
                        <li>Recognize goals</li>
                        <li>Identify training needs</li>
                        <li>Design training programs</li>
                        <li>Implement training</li>
                        <li>Evaluate training</li>
                        <li>Provide feedback</li>
                        <li>Continuous improvement</li>
                        <li>Employee development</li>
                        <li>Career growth</li>
                    </ul>
                </div>
                <div className="image-section">
                    <img
                        src={EmployeeTraineeImg}
                        alt="Employee training and development"
                        className="employee-trainee-image"
                    />
                </div>
            </div>
        </div>
    );
};

export default EmployeeTrainee;
