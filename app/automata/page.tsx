'use client';
import {
    Background,
    BackgroundVariant,
    Controls,
    MiniMap,
    ReactFlow,
    addEdge,
    applyEdgeChanges,
    applyNodeChanges
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useCallback, useState } from 'react';
import CircleNode from './circle-node';

const nodeTypes = {
    circle: CircleNode,
};


const initialNodes = [
    { id: 'n1', position: { x: 0, y: 0 }, data: { label: 'Node 1', color: '#ff0071' }, type: 'circle', },
    { id: 'n2', position: { x: 0, y: 100 }, data: { label: 'Node 2' } },
];
const initialEdges = [{ id: 'n1-n2', source: 'n1', target: 'n2' }];

export default function Automata() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
        [],
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
        [],
    );
    const onConnect = useCallback(
        (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
        [],
    );

    return (
        <div style={{ width: '100vw', height: '100vh', backgroundColor: 'black' }}>
            <ReactFlow
                className='text-black'
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
            >
                <Controls className='text-black' />
                <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
            </ReactFlow>
        </div>
    );
}
