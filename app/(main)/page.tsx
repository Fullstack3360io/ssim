/* eslint-disable @next/next/no-img-element */
'use client';
import { Button } from 'primereact/button';
import { Chart } from 'primereact/chart';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Menu } from 'primereact/menu';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { ProductService } from '../../demo/service/ProductService';
import { LayoutContext } from '../../layout/context/layoutcontext';
import Link from 'next/link';
import { Demo } from '@/types';
import { ChartData, ChartOptions } from 'chart.js';

const Dashboard = () => {
    const { layoutConfig } = useContext(LayoutContext);

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h5>Dashboard</h5>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
