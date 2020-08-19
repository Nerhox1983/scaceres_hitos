/*Autor:        Sergio J. Cáceres C. - scaceres@intergrupo.com.*/
/*Fecha:        2020/08/19.*/
/*Descripción:  Creación de procedimiento almacenado que busca un hito.*/
USE [SJCC]
GO

CREATE PROCEDURE [dbo].[buscarHito]
	@i_hitoId INT
AS
    SELECT * 
    FROM [dbo].[hitos]
    WHERE i_hitid= @i_hitoId
GO