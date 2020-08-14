/*Autor:        Sergio J. Cáceres C. - scaceres@intergrupo.com.*/
/*Fecha:        2020/08/14.*/
/*Descripción:  Creación de procedimiento almacenado que actualiza un hito.*/
USE [SJCC]
GO

CREATE PROCEDURE [dbo].[actualizarHito]
	@i_hitoId INT
	,@s_nombreProyecto VARCHAR (100)
	,@f_fechaIngreso DATETIME 
	,@i_tipo INT
	,@s_descripcion VARCHAR (100)
	,@f_fechaCumplimiento DATETIME
	,@s_cumplio VARCHAR(1)
	,@s_observacionesCumplimiento VARCHAR(100)
AS
BEGIN
	UPDATE [dbo].[hitos]
	SET [s_nompro] = @s_nombreProyecto
      ,[f_fecing] = @f_fechaIngreso
      ,[i_tipo] = @i_tipo
      ,[s_descri] = @s_descripcion
      ,[f_feccum] = @f_fechaCumplimiento
      ,[s_cumpli] = @s_cumplio
      ,[s_obscum] = @s_observacionesCumplimiento
 WHERE i_hitid = @i_hitoId
END