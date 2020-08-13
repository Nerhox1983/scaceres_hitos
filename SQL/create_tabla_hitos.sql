/*Autor:        Sergio J. Cáceres C. - scaceres@intergrupo.com.*/
/*Fecha:        2020/08/13.*/
/*Descripción:  Creación de tabla: hitos.*/

USE SJCC
GO

CREATE TABLE hitos 
(
	i_hitid INT 
	, s_nompro VARCHAR (100) NOT NULL
	, f_fecing DATETIME  NOT NULL
	, i_tipo INT  NOT NULL
	, s_descri VARCHAR (100) NOT NULL
	, f_cumpli DATETIME  NOT NULL
	, s_cumpli VARCHAR (1) NULL
	, s_obscum VARCHAR (100) NULL
	, FOREIGN KEY (i_tipo) REFERENCES tipos(i_tipid)
	, CONSTRAINT [PK_hito] PRIMARY KEY CLUSTERED  
	(  
	[i_hitid] ASC  
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]  
) ON [PRIMARY]
GO