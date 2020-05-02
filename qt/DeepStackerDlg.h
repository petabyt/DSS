#ifndef DEEPSTACKERDLG_H
#define DEEPSTACKERDLG_H

#include <QMainWindow>
#include "ExplorerBar.h"

namespace Ui {
class DeepStackerDlg;
}

class DeepStackerDlg : public QMainWindow
{
    Q_OBJECT

public:
    explicit DeepStackerDlg(QWidget *parent = nullptr);
    ~DeepStackerDlg();

private:
    Ui::DeepStackerDlg *ui;
    ExplorerBar *m_ExplorerBar;
};

#endif // DEEPSTACKERDLG_H
