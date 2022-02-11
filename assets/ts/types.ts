import { NextPage } from 'next';
import React from 'react';

// 'auth' - for authentication pages (signup, login, verification, reset password).
// 'app' - for the app interface after user is logged in
export type AppLayout = 'auth' | 'app';
export type SecondaryLayout = 'workspace-info';

export type PageWithLayout = NextPage & {
  layout?: AppLayout;
  SecondaryLayout?: React.FC;
};

export interface FolderType {
  id: string;
  name: string;
  colour: string;
  workspaceId?: string;
  category: string;
  tasks?: {
    completed: number;
    total: number;
  };
}

export interface MemberType {
  id: string;
  name: string;
  avatar: string;
  role: string;
  tasks: {
    completed: number;
    total: number;
  };
}

export interface RequestType {
  id: string;
  user: {
    id: string;
    name: string;
    email: string;
    avatar: string;
  };
}

type TaskPriorityType = 'Low' | 'Normal' | 'High' | 'Urgent';
export const TaskPriority: { [key in TaskPriorityType]: TaskPriorityType } = {
  Low: 'Low',
  Normal: 'Normal',
  High: 'High',
  Urgent: 'Urgent',
};

export interface WorkspaceCardInfo {
  id: string;
  name: string;
  description: string;
  foldersCount: number;
  membersCount: number;
  tasksCount: number;
}
