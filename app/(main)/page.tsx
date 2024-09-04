/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';

interface TimelineEvent {
    status?: string;
    date?: string;
    icon?: string;
    user?: string;
}

const Dashboard = () => {
    const events: TimelineEvent[] = [
        { status: 'Pending', date: '15/10/2020 10:30', icon: 'pi pi-hourglass', user: 'Yohanny Lugo' },
        { status: 'Processed', date: '15/10/2020 14:00', icon: 'pi pi-check-circle', user: 'Anibhal Cortez' },
        { status: 'Failed', date: '15/10/2020 16:15', icon: 'pi pi-times-circle', user: 'Luis Sanchez' },
        { status: 'Processed', date: '16/10/2020 10:00', icon: 'pi pi-check-circle', user: 'Yohanny Lugo' }
    ];

    const customizedMarker = (item: TimelineEvent) => {
        return (
            <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" style={{ backgroundColor: item.status === 'Processed' ? 'green' : item.status === 'Failed' ? 'red' : 'blue' }}>
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item: TimelineEvent) => {
        return <Card title={item.status} subTitle={`${item.date} | ${item.user}`} />;
    };

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h5>Dashboard</h5>

                    <Timeline value={events} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
