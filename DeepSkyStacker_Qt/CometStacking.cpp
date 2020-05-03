#include "CometStacking.h"
#include "ui/ui_CometStacking.h"

CometStacking::CometStacking(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::CometStacking)
{
    ui->setupUi(this);
}

CometStacking::~CometStacking()
{
    delete ui;
}

void CometStacking::onBnClickedStandardStacking(bool on)
{
    if (on) {
        setCometStackingMode(CSM_STANDARD);
    }
}

void CometStacking::onBnClickedCometStacking(bool on)
{
    if (on) {
        setCometStackingMode(CSM_COMETONLY);
    }
}

void CometStacking::onBnClickedAdvancedStacking(bool on)
{
    if (on) {
        setCometStackingMode(CSM_COMETSTAR);
    }
}

void CometStacking::updateImage()
{
    if (m_CometStackingMode == CSM_STANDARD)
    {
        QPixmap pm(":/comet/normal.bmp");
        ui->laComet->setPixmap(pm);
    }
    else if (m_CometStackingMode == CSM_COMETONLY)
    {
        QPixmap pm(":/comet/trails.bmp");
        ui->laComet->setPixmap(pm);
    }
    else 
    {
        QPixmap pm(":/comet/freeze.bmp");
        ui->laComet->setPixmap(pm);
    }
}