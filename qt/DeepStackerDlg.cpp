#include "DeepStackerDlg.h"
#include "ui/ui_DeepStackerDlg.h"
#include "DSSVersion.h"

DeepStackerDlg::DeepStackerDlg(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::DeepStackerDlg)
{
    ui->setupUi(this);
    setWindowTitle(QString(tr("DeepSkyStacker %1")).arg(VERSION_DEEPSKYSTACKER));
    m_ExplorerBar = new ExplorerBar(this);
    ui->layoutLeft->addWidget(m_ExplorerBar);
}

DeepStackerDlg::~DeepStackerDlg()
{
    delete ui;
    delete m_ExplorerBar;
}
