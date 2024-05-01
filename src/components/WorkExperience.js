import React from 'react';

const WorkExperience = () => {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Work Experience</h2>
            <div className="mb-4">
                <h3 className="text-lg font-bold">Company Name</h3>
                <p className="text-sm text-text-600">Position, Start Date - End Date</p>
                <ul className="list-disc pl-6 mt-2">
                    <li>Responsibility or achievement 1</li>
                    <li>Responsibility or achievement 2</li>
                    <li>Responsibility or achievement 3</li>
                </ul>
            </div>
        </div>
    );
};

export default WorkExperience;