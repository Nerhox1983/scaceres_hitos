/*Autor:        Sergio J. Cáceres C. - scaceres@intergrupo.com.*/
/*Fecha:        2020/08/14.*/
/*Descripción:  Creación de procedimiento almacenado que inserta un hito.*/
USE [SJCC]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[insertarHito]
	@s_nombreProyecto VARCHAR (100)
	,@f_fechaIngreso DATETIME 
	,@i_tipo INT
	,@s_descripcion VARCHAR (100)
	,@f_fechaCumplimiento DATETIME
	,@s_cumplio VARCHAR(1)
	,@s_observacionesCumplimiento VARCHAR(100)
AS
INSERT INTO [dbo].[hitos]
           ([s_nompro]
           ,[f_fecing]
           ,[i_tipo]
           ,[s_descri]
           ,[f_feccum]
           ,[s_cumpli]
           ,[s_obscum])
     VALUES
           (@s_nombreProyecto
           ,@f_fechaIngreso
           ,@i_tipo
           ,@s_descripcion
           ,@f_fechaCumplimiento
           ,@s_cumplio
           ,@s_observacionesCumplimiento)
GO