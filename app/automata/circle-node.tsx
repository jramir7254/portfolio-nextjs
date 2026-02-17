import React from 'react'
import { Handle, Position } from '@xyflow/react';


export default function CircleNode({ data }) {
    return (
        <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: '#fff',
            border: '1px solid #777',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: '12px'
        }}>
            <Handle type="target" position={Position.Top} />
            <div>{data.label}</div>
            <Handle type="source" position={Position.Bottom} />
        </div>
    );
};
