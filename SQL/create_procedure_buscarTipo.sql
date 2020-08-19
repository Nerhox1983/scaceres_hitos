/*Autor:        Sergio J. Cáceres C. - scaceres@intergrupo.com.*/
/*Fecha:        2020/08/19.*/
/*Descripción:  Creación de procedimiento almacenado que busca un tipo.*/
USE [SJCC]
GO

CREATE PROCEDURE [dbo].[buscarTipo]
	@i_tipoId INT
AS
    SELECT * 
    FROM [dbo].[tipos]
    WHERE i_tipid= @i_tipoId
GO