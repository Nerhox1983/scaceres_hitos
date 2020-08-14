/*Autor:        Sergio J. Cáceres C. - scaceres@intergrupo.com.*/
/*Fecha:        2020/08/14.*/
/*Descripción:  Creación de procedimiento almacenado que inserta un tipo.*/
USE [SJCC]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[insertarTipo]
	@s_descripcion VARCHAR (100)
AS
BEGIN
	INSERT INTO [dbo].[tipos]
           ([s_descri])
	VALUES
           (@s_descripcion)
END
GO