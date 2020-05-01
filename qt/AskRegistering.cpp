#include "AskRegistering.h"
#include "ui_AskRegistering.h"

AskRegistering::AskRegistering(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::AskRegistering)
{
    ui->setupUi(this);
    m_Result = ASKREGISTERINGANSWER(0);
}

void AskRegistering::onRegisterAll()
{
    m_Result = ARA_ALL;
}

void AskRegistering::onRegisterOne()
{
    m_Result = ARA_ONE;
}

void AskRegistering::onRegisterNone()
{
    m_Result = ARA_CONTINUE;
}

AskRegistering::~AskRegistering()
{
    delete ui;
}
