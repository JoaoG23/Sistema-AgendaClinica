-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "login" VARCHAR(255) NOT NULL,
    "senha" TEXT NOT NULL,
    "telefone" VARCHAR(25) NOT NULL,
    "email" VARCHAR(25),
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clientes" (
    "id" TEXT NOT NULL,
    "nome_completo" VARCHAR(250) NOT NULL,
    "isAtivado" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "colaboradores" (
    "id" TEXT NOT NULL,
    "nome_completo" VARCHAR(250) NOT NULL,
    "isAtivado" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "especialidade_colaboradorId" TEXT,

    CONSTRAINT "colaboradores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "especialidade_colaborador" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(70) NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "especialidade_colaborador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "agendamentos" (
    "id" TEXT NOT NULL,
    "dataHoraInicio" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataHoraFim" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "valor" MONEY,
    "isServicoConcluido" BOOLEAN DEFAULT true,
    "observacao" VARCHAR(255),
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "clientesId" TEXT,
    "colaboradorId" TEXT,
    "colaboradoresId" TEXT,

    CONSTRAINT "agendamentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "periodo_agendamentos" (
    "id" TEXT NOT NULL,
    "dia_da_semana" VARCHAR(250) NOT NULL,
    "dataHoraInicio" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataHoraFim" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isAtivado" BOOLEAN NOT NULL DEFAULT true,
    "observacao" VARCHAR(255),

    CONSTRAINT "periodo_agendamentos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_login_key" ON "usuarios"("login");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_senha_key" ON "usuarios"("senha");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_telefone_key" ON "usuarios"("telefone");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- AddForeignKey
ALTER TABLE "colaboradores" ADD CONSTRAINT "colaboradores_especialidade_colaboradorId_fkey" FOREIGN KEY ("especialidade_colaboradorId") REFERENCES "especialidade_colaborador"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agendamentos" ADD CONSTRAINT "agendamentos_clientesId_fkey" FOREIGN KEY ("clientesId") REFERENCES "clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agendamentos" ADD CONSTRAINT "agendamentos_colaboradoresId_fkey" FOREIGN KEY ("colaboradoresId") REFERENCES "colaboradores"("id") ON DELETE SET NULL ON UPDATE CASCADE;
