/*Autor:        Sergio J. Cáceres C. - scaceres@intergrupo.com.*/
/*Fecha:        2020/08/18.*/
/*Descripción:  Creación de procedimiento almacenado que elimina un hito.*/
USE [SJCC]
GO

CREATE PROCEDURE [dbo].[eliminarHito]
	@i_hitoId INT
AS
DELETE FROM [dbo].[hitos]
      WHERE i_hitid= @i_hitoId
GO