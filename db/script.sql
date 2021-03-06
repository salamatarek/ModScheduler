CREATE DATABASE CEP;
GO
USE [CEP]
GO
/****** Object:  Table [dbo].[Activities]    Script Date: 7/3/2018 8:07:39 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Activities](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[AggressiveProductivityRate] [real] NOT NULL,
	[Name] [nvarchar](max) NULL,
	[ProcessId] [int] NOT NULL,
	[SafeProductivityRate] [real] NOT NULL,
	[Units] [real] NOT NULL,
	[UnitDelta] [real] NOT NULL,
	[Dependencies] [nvarchar](max) NULL,
	[DurationFunction] [int] NULL,
	[StartToFinish] [real] NOT NULL,
	[AggressiveDuration] [real] NOT NULL,
	[Duration] [real] NOT NULL,
	[inputProdRate] [bit] NOT NULL,
	[Section] [int] NOT NULL,
 CONSTRAINT [PK_Activities] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Links]    Script Date: 7/3/2018 8:07:39 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Links](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[DownwardActivity] [int] NOT NULL,
	[TimePeriod] [real] NOT NULL,
	[UpwardActivity] [int] NOT NULL,
 CONSTRAINT [PK_Links] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Processes]    Script Date: 7/3/2018 8:07:39 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Processes](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NULL,
 CONSTRAINT [PK_Processes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[Activities] ON 

INSERT [dbo].[Activities] ([Id], [AggressiveProductivityRate], [Name], [ProcessId], [SafeProductivityRate], [Units], [UnitDelta], [Dependencies], [DurationFunction], [StartToFinish], [AggressiveDuration], [Duration], [inputProdRate], [Section]) VALUES (2041, 2, N'A1', 1004, 1, 15, 0, N'', 1, 0, 7.5, 15, 1, 0)
INSERT [dbo].[Activities] ([Id], [AggressiveProductivityRate], [Name], [ProcessId], [SafeProductivityRate], [Units], [UnitDelta], [Dependencies], [DurationFunction], [StartToFinish], [AggressiveDuration], [Duration], [inputProdRate], [Section]) VALUES (2042, 3, N'A2', 1004, 2, 10, 0, N'2041', 1, 0, 3.33333325, 5, 1, 0)
INSERT [dbo].[Activities] ([Id], [AggressiveProductivityRate], [Name], [ProcessId], [SafeProductivityRate], [Units], [UnitDelta], [Dependencies], [DurationFunction], [StartToFinish], [AggressiveDuration], [Duration], [inputProdRate], [Section]) VALUES (2043, 3, N'A3', 1004, 1.5, 15, 0, N'2042', 1, 0, 5, 10, 1, 0)
INSERT [dbo].[Activities] ([Id], [AggressiveProductivityRate], [Name], [ProcessId], [SafeProductivityRate], [Units], [UnitDelta], [Dependencies], [DurationFunction], [StartToFinish], [AggressiveDuration], [Duration], [inputProdRate], [Section]) VALUES (2044, 2.5, N'A4', 1004, 1, 15, 0, N'2043', 1, 0, 6, 15, 1, 0)
INSERT [dbo].[Activities] ([Id], [AggressiveProductivityRate], [Name], [ProcessId], [SafeProductivityRate], [Units], [UnitDelta], [Dependencies], [DurationFunction], [StartToFinish], [AggressiveDuration], [Duration], [inputProdRate], [Section]) VALUES (2053, 2, N'AA1', 1007, 1, 15, 0, N'', 1, 0, 7.5, 15, 1, 1)
INSERT [dbo].[Activities] ([Id], [AggressiveProductivityRate], [Name], [ProcessId], [SafeProductivityRate], [Units], [UnitDelta], [Dependencies], [DurationFunction], [StartToFinish], [AggressiveDuration], [Duration], [inputProdRate], [Section]) VALUES (2054, 3, N'AA2', 1007, 2, 10, 0, N'2053', 1, 0, 3.33333325, 5, 1, 1)
INSERT [dbo].[Activities] ([Id], [AggressiveProductivityRate], [Name], [ProcessId], [SafeProductivityRate], [Units], [UnitDelta], [Dependencies], [DurationFunction], [StartToFinish], [AggressiveDuration], [Duration], [inputProdRate], [Section]) VALUES (2055, 3, N'AA3', 1007, 1.5, 15, 0, N'2054', 1, 0, 5, 10, 1, 1)
INSERT [dbo].[Activities] ([Id], [AggressiveProductivityRate], [Name], [ProcessId], [SafeProductivityRate], [Units], [UnitDelta], [Dependencies], [DurationFunction], [StartToFinish], [AggressiveDuration], [Duration], [inputProdRate], [Section]) VALUES (2056, 2.5, N'AA4', 1007, 1, 15, 0, N'2055', 1, 0, 6, 15, 1, 1)
INSERT [dbo].[Activities] ([Id], [AggressiveProductivityRate], [Name], [ProcessId], [SafeProductivityRate], [Units], [UnitDelta], [Dependencies], [DurationFunction], [StartToFinish], [AggressiveDuration], [Duration], [inputProdRate], [Section]) VALUES (2057, 2.5, N'BB1', 1008, 1, 10, -15, N'2053', 1, 1, 4, 10, 1, 1)
INSERT [dbo].[Activities] ([Id], [AggressiveProductivityRate], [Name], [ProcessId], [SafeProductivityRate], [Units], [UnitDelta], [Dependencies], [DurationFunction], [StartToFinish], [AggressiveDuration], [Duration], [inputProdRate], [Section]) VALUES (2058, 3, N'BB2', 1008, 2, 10, 0, N'2054,2057', 0, 0, 3.33333325, 5, 1, 1)
INSERT [dbo].[Activities] ([Id], [AggressiveProductivityRate], [Name], [ProcessId], [SafeProductivityRate], [Units], [UnitDelta], [Dependencies], [DurationFunction], [StartToFinish], [AggressiveDuration], [Duration], [inputProdRate], [Section]) VALUES (2059, 2, N'BB3', 1008, 1, 15, 0, N'2058,2055', 0, 0, 7.5, 15, 1, 1)
INSERT [dbo].[Activities] ([Id], [AggressiveProductivityRate], [Name], [ProcessId], [SafeProductivityRate], [Units], [UnitDelta], [Dependencies], [DurationFunction], [StartToFinish], [AggressiveDuration], [Duration], [inputProdRate], [Section]) VALUES (2060, 2.5, N'BB4', 1008, 1.5, 10, 0, N'2059,2056', 0, 0, 4, 6.66666651, 1, 1)
INSERT [dbo].[Activities] ([Id], [AggressiveProductivityRate], [Name], [ProcessId], [SafeProductivityRate], [Units], [UnitDelta], [Dependencies], [DurationFunction], [StartToFinish], [AggressiveDuration], [Duration], [inputProdRate], [Section]) VALUES (2061, 3, N'CC1', 1009, 2, 15, -10, N'2057', 1, 2.97, 5, 7.5, 1, 1)
INSERT [dbo].[Activities] ([Id], [AggressiveProductivityRate], [Name], [ProcessId], [SafeProductivityRate], [Units], [UnitDelta], [Dependencies], [DurationFunction], [StartToFinish], [AggressiveDuration], [Duration], [inputProdRate], [Section]) VALUES (2062, 3.5, N'CC2', 1009, 2, 10, 0, N'2058,2061', 0, 0, 2.857143, 5, 1, 1)
INSERT [dbo].[Activities] ([Id], [AggressiveProductivityRate], [Name], [ProcessId], [SafeProductivityRate], [Units], [UnitDelta], [Dependencies], [DurationFunction], [StartToFinish], [AggressiveDuration], [Duration], [inputProdRate], [Section]) VALUES (2063, 2, N'CC3', 1009, 1, 15, -10, N'2062,2059', 0, 0, 7.5, 15, 1, 1)
INSERT [dbo].[Activities] ([Id], [AggressiveProductivityRate], [Name], [ProcessId], [SafeProductivityRate], [Units], [UnitDelta], [Dependencies], [DurationFunction], [StartToFinish], [AggressiveDuration], [Duration], [inputProdRate], [Section]) VALUES (2064, 2.5, N'CC4', 1009, 1, 10, 0, N'2063,2060', 0, 0, 4, 10, 1, 1)
INSERT [dbo].[Activities] ([Id], [AggressiveProductivityRate], [Name], [ProcessId], [SafeProductivityRate], [Units], [UnitDelta], [Dependencies], [DurationFunction], [StartToFinish], [AggressiveDuration], [Duration], [inputProdRate], [Section]) VALUES (3039, 2, N'B1', 1005, 1, 10, -15, N'2041', 1, 1, 5, 10, 1, 0)
INSERT [dbo].[Activities] ([Id], [AggressiveProductivityRate], [Name], [ProcessId], [SafeProductivityRate], [Units], [UnitDelta], [Dependencies], [DurationFunction], [StartToFinish], [AggressiveDuration], [Duration], [inputProdRate], [Section]) VALUES (3040, 4.291846, N'B2', 1005, 1.42857146, 10, 0, N'3039', 1, 0, 2.33, 7, 0, 0)
INSERT [dbo].[Activities] ([Id], [AggressiveProductivityRate], [Name], [ProcessId], [SafeProductivityRate], [Units], [UnitDelta], [Dependencies], [DurationFunction], [StartToFinish], [AggressiveDuration], [Duration], [inputProdRate], [Section]) VALUES (3041, 7.518797, N'B3', 1005, 1.42857146, 10, 0, N'3040', 1, 0, 1.33, 7, 0, 0)
INSERT [dbo].[Activities] ([Id], [AggressiveProductivityRate], [Name], [ProcessId], [SafeProductivityRate], [Units], [UnitDelta], [Dependencies], [DurationFunction], [StartToFinish], [AggressiveDuration], [Duration], [inputProdRate], [Section]) VALUES (3042, 1.25, N'B4', 1005, 1, 10, 0, N'3041', 1, 0, 8, 10, 0, 0)
INSERT [dbo].[Activities] ([Id], [AggressiveProductivityRate], [Name], [ProcessId], [SafeProductivityRate], [Units], [UnitDelta], [Dependencies], [DurationFunction], [StartToFinish], [AggressiveDuration], [Duration], [inputProdRate], [Section]) VALUES (3044, 2, N'C1', 1011, 1, 10, -10, N'3039', 1, 0, 5, 10, 1, 0)
INSERT [dbo].[Activities] ([Id], [AggressiveProductivityRate], [Name], [ProcessId], [SafeProductivityRate], [Units], [UnitDelta], [Dependencies], [DurationFunction], [StartToFinish], [AggressiveDuration], [Duration], [inputProdRate], [Section]) VALUES (3045, 2, N'C2', 1011, 1, 10, 0, N'3044', 1, 0, 5, 10, 1, 0)
INSERT [dbo].[Activities] ([Id], [AggressiveProductivityRate], [Name], [ProcessId], [SafeProductivityRate], [Units], [UnitDelta], [Dependencies], [DurationFunction], [StartToFinish], [AggressiveDuration], [Duration], [inputProdRate], [Section]) VALUES (3046, 2, N'C3', 1011, 1, 10, 0, N'3045', 1, 0, 5, 10, 1, 0)
INSERT [dbo].[Activities] ([Id], [AggressiveProductivityRate], [Name], [ProcessId], [SafeProductivityRate], [Units], [UnitDelta], [Dependencies], [DurationFunction], [StartToFinish], [AggressiveDuration], [Duration], [inputProdRate], [Section]) VALUES (3047, 2, N'C4', 1011, 1, 10, 0, N'3046', 1, 0, 5, 10, 1, 0)
SET IDENTITY_INSERT [dbo].[Activities] OFF
SET IDENTITY_INSERT [dbo].[Links] ON 

INSERT [dbo].[Links] ([Id], [DownwardActivity], [TimePeriod], [UpwardActivity]) VALUES (1086, 2062, 0, 3044)
SET IDENTITY_INSERT [dbo].[Links] OFF
SET IDENTITY_INSERT [dbo].[Processes] ON 

INSERT [dbo].[Processes] ([Id], [Name]) VALUES (1004, N'Roof')
INSERT [dbo].[Processes] ([Id], [Name]) VALUES (1005, N'Wall')
INSERT [dbo].[Processes] ([Id], [Name]) VALUES (1006, N'Floor')
INSERT [dbo].[Processes] ([Id], [Name]) VALUES (1007, N'DOWN ROOF')
INSERT [dbo].[Processes] ([Id], [Name]) VALUES (1008, N'DOWN WALL')
INSERT [dbo].[Processes] ([Id], [Name]) VALUES (1009, N'DOWN FLOOR')
INSERT [dbo].[Processes] ([Id], [Name]) VALUES (1010, N'DOWN CONCRETE')
INSERT [dbo].[Processes] ([Id], [Name]) VALUES (1011, N'COLUMN')
SET IDENTITY_INSERT [dbo].[Processes] OFF
ALTER TABLE [dbo].[Activities] ADD  DEFAULT ((0.0000000000000000e+000)) FOR [AggressiveDuration]
GO
ALTER TABLE [dbo].[Activities] ADD  DEFAULT ((0.0000000000000000e+000)) FOR [Duration]
GO
ALTER TABLE [dbo].[Activities] ADD  DEFAULT ((0)) FOR [inputProdRate]
GO
ALTER TABLE [dbo].[Activities] ADD  DEFAULT ((0)) FOR [Section]
GO
