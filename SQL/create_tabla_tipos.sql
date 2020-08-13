/*Autor:        Sergio J. Cáceres C. - scaceres@intergrupo.com.*/
/*Fecha:        2020/08/13.*/
/*Descripción:  Creación de tabla: tipos.*/

USE SJCC
GO

CREATE TABLE tipos 
(
	i_tipid INT 
	, s_descri VARCHAR (100) NOT NULL
	CONSTRAINT [PK_tipo] PRIMARY KEY CLUSTERED  
	(  
	[i_tipid] ASC  
	)WITH (PAD_INDEX = OFF, 
    STATISTICS_NORECOMPUTE = OFF, 
    IGNORE_DUP_KEY = OFF, 
    ALLOW_ROW_LOCKS = ON, 
    ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]  
) ON [PRIMARY]